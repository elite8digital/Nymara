// components/product/ShareModal.tsx
import React from "react";
import { Product } from "@/contexts/AppContext";

interface ShareModalProps {
  product: Product;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ product, onClose }) => {
  const shareProduct = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Share This Product</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Share this beautiful piece with someone special
          </p>
          <div className="flex space-x-3">
            <button
              onClick={shareProduct}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Share Link
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
                onClose();
              }}
              className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;