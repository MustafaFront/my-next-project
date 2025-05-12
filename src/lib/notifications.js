import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        // TODO: get vapid key from firebase
        vapidKey: "BHrDUHJlutdTob8bCcrJIyhYaXg8fSXSI94l_EmY12WeCmF_hyOtZcESgWdwIynj7qfi0qHEi6ZZKIWWwTopBK8",
        
      });
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error.message, error);
  }
};
