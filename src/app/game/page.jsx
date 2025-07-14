"use client";
import { useState } from "react";
import ShipmentDetailsStepperModal from "./Components/ShipmentDetailsStepperModal";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded"
      >
        عرض تفاصيل الشحنة
      </button>

      <ShipmentDetailsStepperModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
