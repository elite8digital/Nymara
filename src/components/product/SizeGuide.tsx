// components/product/SizeGuide.tsx
import React, { useState } from "react";
import ringGuide from "@/assets/ring_size_guide.png";
import necklaceGuide from "@/assets/necklace_size_guide.png";
import banglesGuide from "@/assets/bangle_size_guide.png";
import banglesGuide1 from "@/assets/bangle_size_guide1.png";
import braceletsGuide from "@/assets/ring_size_guide.png";

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
  productType?: string; // NEW: Pass product type/category
}

type GuideType = "ring" | "necklace" | "bangles" | "bracelets";

const SizeGuide: React.FC<SizeGuideProps> = ({
  isOpen,
  onClose,
  productType,
}) => {
  // Determine initial guide based on product type
  const getInitialGuideType = (): GuideType => {
    if (!productType) return "ring";

    const type = productType.toLowerCase();

    if (type.includes("ring")) return "ring";
    if (type.includes("necklace") || type.includes("chain")) return "necklace";
    if (type.includes("bangle")) return "bangles";
    if (type.includes("bracelet")) return "bracelets";

    return "ring"; // default
  };

  const [activeGuide, setActiveGuide] = useState<GuideType>(
    getInitialGuideType()
  );

  if (!isOpen) return null;

  interface BaseGuideContent {
    title: string;
    description: string;
    chartTitle: string;
    tips: string[];
    image?: string;
    images?: string[];
  }

  const guideContent: Record<GuideType, BaseGuideContent> = {
    ring: {
      title: "Ring Size Guide",
      image: ringGuide,
      description: "Find your perfect ring size using one of these methods:",
      chartTitle: "Size Chart (Inner Circumference):",
      tips: [
        "Measure your finger at the end of the day",
        "Consider the width of the band",
        "Account for seasonal finger size changes",
        "When in doubt, size up rather than down",
      ],
    },
    necklace: {
      title: "Necklace Size Guide",
      image: necklaceGuide,
      description: "Find your perfect necklace length:",
      chartTitle: "Necklace Length Chart:",
      tips: [
        "Measure around your neck at the desired length",
        "Consider the style and pendant size",
        "Account for personal comfort preferences",
        "Different lengths suit different necklines",
      ],
    },
    bangles: {
      title: "Bangles Size Guide",
      images: [banglesGuide, banglesGuide1],
      description: "Find your perfect bangle size:",
      chartTitle: "Bangle Size Chart:",
      tips: [
        "Measure the widest part of your hand",
        "Ensure the bangle can slide over your hand comfortably",
        "Consider how snug or loose you prefer the fit",
        "Account for stacking multiple bangles",
      ],
    },
    bracelets: {
      title: "Bracelets Size Guide",
      image: braceletsGuide,
      description: "Find your perfect bracelet size:",
      chartTitle: "Bracelet Size Chart:",
      tips: [
        "Measure your wrist at the wrist bone",
        "Add 1-2 cm for comfort",
        "Consider if you prefer a tight or loose fit",
        "Account for clasp and closure type",
      ],
    },
  };

  // Determine which tabs to show based on product type
  const getAvailableTabs = (): GuideType[] => {
    if (!productType) return ["ring", "necklace", "bangles", "bracelets"];

    const type = productType.toLowerCase();

    if (type.includes("earring")) return []; 
    if (type.includes("ring")) return ["ring"];
    if (type.includes("necklace") || type.includes("chain"))
      return ["necklace"];
    if (type.includes("bangle")) return ["bangles"];
    if (type.includes("bracelet")) return ["bracelets"];

    // Show all if product type doesn't match
    return ["ring", "necklace", "bangles", "bracelets"];
  };

  const availableTabs = getAvailableTabs();
  const currentGuide = guideContent[activeGuide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900">
            {currentGuide.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-colors"
          >
            ×
          </button>
        </div>

        {/* Tab Navigation - Only show if multiple tabs available */}
        {availableTabs.length > 1 && (
          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex flex-row gap-4 flex-wrap">
              {availableTabs.includes("ring") && (
                <button
                  onClick={() => setActiveGuide("ring")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeGuide === "ring"
                      ? "bg-[#9a8457] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Ring
                </button>
              )}
              {availableTabs.includes("necklace") && (
                <button
                  onClick={() => setActiveGuide("necklace")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeGuide === "necklace"
                      ? "bg-[#9a8457] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Necklace
                </button>
              )}
              {availableTabs.includes("bangles") && (
                <button
                  onClick={() => setActiveGuide("bangles")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeGuide === "bangles"
                      ? "bg-[#9a8457] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Bangles
                </button>
              )}
              {availableTabs.includes("bracelets") && (
                <button
                  onClick={() => setActiveGuide("bracelets")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeGuide === "bracelets"
                      ? "bg-[#9a8457] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Bracelets
                </button>
              )}
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6">
          <div className="space-y-6">
            <p className="text-gray-700">{currentGuide.description}</p>

            {/* Size Chart Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {currentGuide.chartTitle}
              </h4>
              {activeGuide === "bangles" &&
              Array.isArray(currentGuide.images) ? (
                <div className="space-y-4">
                  {currentGuide.images.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${currentGuide.title} Conversion Chart ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={currentGuide.image!}
                    alt={`${currentGuide.title} Conversion Chart`}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>

            {/* Measuring Tips Section */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Measuring Tips:
              </h4>
              <ul className="space-y-2 text-gray-700">
                {currentGuide.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-[#9a8457] text-white py-3 rounded-lg hover:bg-[#8a7547] transition-colors font-medium text-base"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
