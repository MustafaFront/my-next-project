// app/chat/page.js
'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase'; // تأكد من أن المسار صحيح
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import ChatBox from '../map/components/ChatBox';

export default function ChatPage() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.uid); // حفظ الـ UID الخاص بالمستخدم
      } else {
        signInAnonymously(auth).catch((error) => {
          console.error("Error signing in anonymously: ", error);
        });
      }
    });

    return () => unsubscribe();
  }, []);

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>جاري تسجيل الدخول...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <ChatBox chatId="demo-chat" currentUser={currentUser} />
    </div>
  );
}
