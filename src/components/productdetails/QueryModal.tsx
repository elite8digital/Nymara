// components/product/QueryModal.tsx
import React, { useState } from "react";
import { Product } from "@/contexts/AppContext";
import axios from "axios";

interface QueryModalProps {
  product: Product;
  amount: number;
  symbol: string;
  onClose: () => void;
  VITE_API_URL: string;
}

const QueryModal: React.FC<QueryModalProps> = ({
  product,
  amount,
  symbol,
  onClose,
  VITE_API_URL,
}) => {
  const [hintSize, setHintSize] = useState("");
  const [hintMessage, setHintMessage] = useState("");

  const handleSendQuery = async () => {
    try {
      await axios.post(`${VITE_API_URL}/api/contact/query`, {
        name: "",
        email: "support@nymara.com",
        size: hintSize,
        message: hintMessage,
        productId: product._id,
        productName: product.name,
        productUrl: window.location.href,
      });

      alert("✅ Your query has been sent successfully! We'll get back to you soon.");
      onClose();
      setHintSize("");
      setHintMessage("");
    } catch (err) {
      console.error("❌ Error sending query:", err);
      alert("Failed to send query. Please try again later.");
    }
  };

  const handleCopyDetails = () => {
    const hintText = `Product: ${product.name}\nLink: ${window.location.href}${
      hintSize ? `\nSize: ${hintSize}` : ""
    }${hintMessage ? `\nNotes: ${hintMessage}` : ""}`;
    navigator.clipboard.writeText(hintText);
    alert("Hint details copied to clipboard!");
    onClose();
    setHintSize("");
    setHintMessage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Query/Doubt</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Tell us the query about the size or any other concern you have
            regarding this product. We will get back to you as soon as possible.
          </p>

          {/* Product Preview */}
          <div className="bg-gray-50 p-3 rounded-lg flex items-center space-x-3">
            <img
              src={product.coverImage}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-900">
                {product.name}
              </div>
              <div className="text-sm text-gray-600">
                {symbol}
                {amount.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Size Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Preferred Size
            </label>
            <input
              type="text"
              value={hintSize}
              onChange={(e) => setHintSize(e.target.value)}
              placeholder="Enter size (e.g., 11, 12, or custom size)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a8457] focus:border-[#9a8457]"
            />
            <p className="text-xs text-gray-500 mt-1">
              Not sure about size? Leave it blank or add a note below.
            </p>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Additional Notes
            </label>
            <textarea
              value={hintMessage}
              onChange={(e) => setHintMessage(e.target.value)}
              placeholder="Add any special requests, concerns, or preferences..."
              rows={4}
              maxLength={300}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a8457] focus:border-[#9a8457] resize-none"
            />
            <div className="text-xs text-gray-500 mt-1 text-right">
              {hintMessage.length}/300 characters
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleSendQuery}
              className="flex-1 bg-[#9a8457] text-white py-3 px-4 rounded-lg hover:bg-[#8a7547] transition-colors font-medium"
            >
              Send Query
            </button>
            <button
              onClick={handleCopyDetails}
              className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Copy Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryModal;