"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { requestNotificationPermission } from "@/lib/notifications";
import {onMessage} from "firebase/messaging";
import { messaging } from "@/lib/firebase";

export default function TestPage() {
  const [shipments, setShipments] = useState([]);
  const[token, setToken] = useState(null);

  
  // ممكن تحطه في _app.js أو أي useEffect أولي في المشروع
useEffect(() => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((err) => {
        console.error('Service Worker registration failed:', err);
      });
  }
}, []);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "shipments"));
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setShipments(docs);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log(payload);
    })
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">الشحنات</h1>
      {shipments.length === 0 ? (
        <p>لا توجد شحنات</p>
      ) : (
        <ul className="space-y-2">
          {shipments.map((item) => (
            <li key={item.id} className="bg-gray-100 p-2 rounded">
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
      )}

      <button onClick={async () => {
        const token = await requestNotificationPermission();
        if (token) {
          setToken(token);
          console.log("Token:", token);
        } else {
          console.log("Permission denied or error occurred.");
        }
      }} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Get Token</button>
    </div>
  );
}
