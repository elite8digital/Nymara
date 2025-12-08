// components/product/VideoModal.tsx
import React from "react";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative bg-black rounded-xl max-w-4xl w-full shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300 text-2xl z-10"
        >
          ×
        </button>
        <video
          src={videoUrl}
          controls
          autoPlay
          loop
          playsInline
          className="w-full h-[70vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default VideoModal;