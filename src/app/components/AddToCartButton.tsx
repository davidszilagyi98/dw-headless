import React from "react";

interface AddToCartButtonProps {
  productDetails: {
    productId: string;
    productLanguageId: string;
    productVariantId: string;
    quantity: number;
    stock: number;
  };
  onAddToCart: (productDetails: {
    productId: string;
    productLanguageId: string;
    productVariantId: string;
    quantity: number;
    stock: number;
  }) => Promise<void>;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productDetails,
  onAddToCart
}) => {
  const handleAddToCart = async () => {
    try {
      await onAddToCart(productDetails);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <button
      type="button"
      className="btn mb-4 mt-4 p-2 cta-button text-decoration-none button-text-color"
      onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
