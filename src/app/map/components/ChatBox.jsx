// components/ChatBox.js
'use client';

import { useEffect, useRef, useState } from 'react';
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export default function ChatBox({ chatId = 'default-chat', currentUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  // جلب الرسائل الجديدة من Firestore في الوقت الفعلي
  useEffect(() => {
    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // الاشتراك في حالة الكتابة (يكتب الآن...)
    const typingRef = doc(db, 'chats', chatId, 'typing', 'status');
    const unsubscribeTyping = onSnapshot(typingRef, (doc) => {
      setIsTyping(doc.exists() && doc.data().isTyping && doc.data().uid !== currentUser);
    });

    return () => {
      unsubscribe();
      unsubscribeTyping();
    };
  }, [chatId, currentUser]);

  // إرسال الرسالة
  const handleSend = async () => {
    if (!input.trim()) return;

    await addDoc(collection(db, 'chats', chatId, 'messages'), {
      text: input,
      sender: currentUser,
      createdAt: serverTimestamp(),
    });

    setInput('');
    stopTyping();
  };

  // تحديث حالة الكتابة
  const handleTyping = async () => {
    const typingRef = doc(db, 'chats', chatId, 'typing', 'status');
    await setDoc(typingRef, {
      isTyping: true,
      uid: currentUser,
    });
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(stopTyping, 1000);
  };

  // إيقاف حالة الكتابة
  const stopTyping = async () => {
    const typingRef = doc(db, 'chats', chatId, 'typing', 'status');
    await deleteDoc(typingRef).catch(() => {});
  };

  // التمرير إلى الأسفل عند ظهور رسائل جديدة
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-full max-w-md mx-auto h-[80vh] flex flex-col border rounded-xl shadow-md bg-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: msg.sender === currentUser ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`rounded-xl px-4 py-2 max-w-[70%] break-words text-sm ${
              msg.sender === currentUser
                ? 'bg-green-100 self-end text-right'
                : 'bg-gray-100 self-start text-left'
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
        {isTyping && (
          <div className="text-xs text-gray-500 italic">يكتب الآن...</div>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="p-3 border-t flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleTyping();
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="اكتب رسالة..."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="text-green-600 hover:text-green-800 transition"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
}
