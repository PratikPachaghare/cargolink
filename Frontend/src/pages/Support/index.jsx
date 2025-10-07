import React from "react";
import { useNavigate } from "react-router-dom";
import Support from "./components/Support";

export default function SupportPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    // Navigate back to homepage when modal closes
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center items-start">
      <Support onClose={handleClose} />
    </div>
  );
}
