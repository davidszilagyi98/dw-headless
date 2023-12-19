import React from "react";

interface ProductCountProps {
  count: number;
  visibleCount: number;
}

const ProductCount: React.FC<ProductCountProps> = ({ count, visibleCount }) => {
  return (
    <p className="d-flex justify-content-center mt-5">
      {`${visibleCount} out of ${count} products`}
    </p>
  );
};

export default ProductCount;
