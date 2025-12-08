// components/product/ProductConfiguration.tsx
import React, { useState } from "react";
import { Plus, Ruler } from "lucide-react";
import { Product } from "@/contexts/AppContext";

interface ProductConfigurationProps {
  product: Product;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  engravingText: string;
  setEngravingText: (text: string) => void;
  setShowSizeGuide: (show: boolean) => void;
  standardSizes: string[];
}

const ProductConfiguration: React.FC<ProductConfigurationProps> = ({
  product,
  selectedSize,
  setSelectedSize,
  engravingText,
  setEngravingText,
  setShowSizeGuide,
  standardSizes,
}) => {
  const [showEngravingForm, setShowEngravingForm] = useState(false);
const category = Array.isArray(product.category)
  ? product.category.join(" ").toLowerCase()
  : product.category?.toLowerCase?.() || "";

  const renderSizeSelection = () => {
    // Hide for Earrings
    if (category.includes("earring")) return null;

    // Bracelet Standard Size UI
    if (category.includes("bracelet")) {
      return (
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-900 mb-2 block">
            Size
          </label>
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium">
            Standard Size: 6.5 inches
          </div>
          <p className="text-xs text-gray-600 mt-2">
            This is a universal bracelet size that fits most wrists comfortably.
          </p>
        </div>
      );
    }

    // Default size selection for rings/bangles/necklaces
    return (
      standardSizes.length > 1 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-900">
              Size: {selectedSize || "Please Select"}
            </label>

            {!category.includes("bracelet") && (
              <button
                onClick={() => setShowSizeGuide(true)}
                className="text-sm text-[#9a8457] hover:text-[#8a7547] flex items-center space-x-1"
              >
                <Ruler className="w-4 h-4" />
                <span>Size Guide</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-5 gap-2 mb-3">
            {standardSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`p-2 text-center rounded-lg border transition-all ${
                  selectedSize === size
                    ? "border-[#9a8457] bg-[#9a8457] text-white"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">
              Or enter custom size:
            </label>
            <input
              type="text"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              placeholder="Enter size"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a8457] focus:border-transparent"
            />
          </div>
        </div>
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Size Selection */}
      {renderSizeSelection()}

      {/* Add Engraving */}
      <div>
        <button
          onClick={() => setShowEngravingForm(!showEngravingForm)}
          className="flex items-center space-x-2 text-[#9a8457] hover:text-[#8a7547] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Personal Engraving</span>
        </button>

        {showEngravingForm && (
          <div className="mt-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              value={engravingText}
              onChange={(e) => setEngravingText(e.target.value)}
              placeholder="Enter engraving text (max 10 characters)"
              maxLength={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9a8457] focus:border-[#9a8457]"
            />
            <div className="text-xs text-gray-500 mt-1">
              {engravingText.length}/10 characters
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductConfiguration;