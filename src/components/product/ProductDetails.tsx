// pages/ProductDetails.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCurrency } from "@/contexts/CurrencyContext";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import {
  useProducts,
  useCart,
  useWishlist,
  Product,
} from "@/contexts/AppContext";
import RelatedProducts from "@/components/product/RelatedProducts";
import { useTracking } from "@/contexts/TrackingContext";
import axios from "axios";

// Import new components
import SizeGuide from "./SizeGuide";
import ProductBreadcrumb from "../productdetails/ProductBreadcrumb";
import ProductImageGallery from "../productdetails/ProductImageGallery";
import ProductInfo from "../productdetails/ProductInfo";
import ProductConfiguration from "../productdetails/ProductConfiguration";
import ProductFeatures from "../productdetails/ProductFeatures";
import ProductActions from "../productdetails/ProductActions";
import ProductDetailsSection from "../productdetails/ProductDetailsSection";
import VideoModal from "../productdetails/VideoModal";
import ShareModal from "../productdetails/ShareModal";
import QueryModal from "../productdetails/QueryModal";

const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Loader Component
const ProductLoader = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#9a8457] rounded-full border-t-transparent animate-spin"></div>
          {/* Inner icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-[#9a8457]" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Product...</h2>
        <p className="text-gray-600">Please wait while we fetch the details</p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id || "0");
  const { selectedCountry } = useCurrency();

  const { getProductById, products } = useProducts();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { logAddToCart } = useTracking();

  // State
  const [product, setProduct] = useState<Product | null>(null);
  const [baseProduct, setBaseProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMetal, setSelectedMetal] = useState("18K");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [engravingText, setEngravingText] = useState("");
  const [expandedDetails, setExpandedDetails] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Modal states
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDropHintModal, setShowDropHintModal] = useState(false);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${VITE_API_URL}/api/user/ornaments/${id}?currency=${selectedCountry.currency}`
        );

        if (res.data?.ornament) {
          const ornament = res.data.ornament;
          let normalizedVariants: any[] = [];

          if (ornament.variants && !Array.isArray(ornament.variants)) {
            normalizedVariants = Object.entries(ornament.variants).map(
              ([metalType, id]) => ({
                _id: id,
                metalType,
              })
            );
          } else {
            normalizedVariants = ornament.variants || [];
          }

          if (!baseProduct) {
            setBaseProduct({
              ...ornament,
              variants: normalizedVariants,
            });
          }
          setProduct({
            ...ornament,
            variants: normalizedVariants,
          });
        }
      } catch (err: any) {
        console.error("❌ Fetch error:", err);
        setError(err.response?.data?.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id, selectedCountry.currency]);

  // Scroll to top whenever the product ID changes (including related product clicks)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Set default size
  useEffect(() => {
    if (
      product &&
      typeof product.size === "string" &&
      STANDARD_SIZES.includes(product.size)
    ) {
      setSelectedSize(product.size);
    }
  }, [product]);

  // Show loader while loading
  if (loading) {
    return <ProductLoader />;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or may have been
            removed.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#9a8457] text-white px-6 py-3 rounded-lg hover:bg-[#8a7547] transition-colors"
          >
            Browse All Products
          </button>
        </div>
      </div>
    );
  }

  const productImages = [product.coverImage, ...(product.images || [])].filter(
    (img): img is string => Boolean(img)
  );

  const STANDARD_SIZES = [
    "4", "4.5", "5", "5.5", "6", "6.5", "7",
    "7.5", "8", "8.5", "9", "9.5", "10",
  ];

  const calculatePrice = (): { amount: number; symbol: string } => {
    const currency = selectedCountry.currency;
    if (product?.prices && product.prices[currency]) {
      const { amount, symbol } = product.prices[currency];
      return {
        amount,
        symbol: symbol || (currency === "INR" ? "₹" : "$"),
      };
    }
    return {
      amount: product?.price || 0,
      symbol: currency === "INR" ? "₹" : "$",
    };
  };

  const categoryString =
  Array.isArray(product.category) ? product.category.join(" ").toLowerCase() : product.category?.toLowerCase?.() || "";


  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart(product, quantity, {
      selectedMetal,
      selectedSize,
      engraving: engravingText,
    });

    logAddToCart(product._id, {
      name: product.name,
      category: product.category,
      price: product.price,
      selectedMetal,
      selectedSize,
      quantity,
      page: window.location.pathname,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const relatedProducts = products
    .filter(
      (p) =>
        p._id !== product._id &&
        (p.category === product.category ||
          p.style === product.style ||
          p.stoneType === product.stoneType)
    )
    .slice(0, 4);

  const { amount, symbol } = calculatePrice();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <ProductBreadcrumb product={product} navigate={navigate} />

        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#9a8457] hover:text-[#8a7547] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImageGallery
            product={product}
            productImages={productImages}
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
            isZoomed={isZoomed}
            setIsZoomed={setIsZoomed}
            setShowVideoModal={setShowVideoModal}
            setShowShareModal={setShowShareModal}
            setProduct={setProduct}
            selectedCountry={selectedCountry}
            VITE_API_URL={VITE_API_URL}
            setLoading={setLoading}
          />

          <div className="space-y-6">
            <ProductInfo
              product={product}
              amount={amount}
              symbol={symbol}
              selectedCountry={selectedCountry}
              baseProduct={baseProduct}
              setProduct={setProduct}
              setActiveImageIndex={setActiveImageIndex}
            />

             {
 Array.isArray(product.purityOptions) &&
 product.purityOptions.length > 0 && (
  <div className="flex items-center gap-3">
    <span className="text-sm font-medium text-gray-600">
      Purity:
    </span>

    {product.purityOptions.map((option) => (
      <button
        key={option.id}
        disabled={option.purity === product.currentPurity}
        onClick={() => navigate(`/product/${option.id}`)}
        className={`px-4 py-2 border rounded-md text-sm transition
          ${
            option.purity === product.currentPurity
              ? "bg-[#9a8457] text-white border-[#9a8457]"
              : "border-gray-300 hover:border-[#9a8457] hover:text-[#9a8457]"
          }`}
      >
        {option.purity}
      </button>
    ))}
  </div>
)}


            <ProductConfiguration
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              engravingText={engravingText}
              setEngravingText={setEngravingText}
              setShowSizeGuide={setShowSizeGuide}
              standardSizes={STANDARD_SIZES}
            />

            <ProductFeatures setShowDropHintModal={setShowDropHintModal} />

            <ProductActions
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              selectedSize={selectedSize}
              standardSizes={STANDARD_SIZES}
              handleAddToCart={handleAddToCart}
              handleWishlistToggle={handleWishlistToggle}
              isInWishlist={isInWishlist}
              addedToCart={addedToCart}
            />
          </div>
        </div>

        <ProductDetailsSection
          product={product}
          expandedDetails={expandedDetails}
          setExpandedDetails={setExpandedDetails}
        />

        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}

        {/* Modals */}
        {showVideoModal && product.videoUrl && (
          <VideoModal
            videoUrl={product.videoUrl}
            onClose={() => setShowVideoModal(false)}
          />
        )}

        {showSizeGuide && !categoryString.includes("earring") && (
            <SizeGuide
              isOpen={showSizeGuide}
              onClose={() => setShowSizeGuide(false)}
              productType={
                Array.isArray(product.category)
                  ? product.category[0]
                  : product.category
              }
            />
          )}

        {showShareModal && (
          <ShareModal
            product={product}
            onClose={() => setShowShareModal(false)}
          />
        )}

        {showDropHintModal && (
          <QueryModal
            product={product}
            amount={amount}
            symbol={symbol}
            onClose={() => setShowDropHintModal(false)}
            VITE_API_URL={VITE_API_URL}
          />
        )}
      </div>
    </div>
  );
};


export default ProductDetail;


