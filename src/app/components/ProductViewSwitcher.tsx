"use client";
import getAllProducts from "../api/getAllProducts";
import ProductDetailPage from "./ProductDetailPage";
import ProductList from "./ProductList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductViewSwitcher() {
  const searchParams = useSearchParams();
  const productID = searchParams.get("ProductIDs");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getAllProducts();
        setProducts(result.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (productID) {
    const product = products.find((product) => product.id === productID);

    if (product) {
      return <ProductDetailPage product={product} />;
    } else {
      return <p>Product not found</p>;
    }
  }

  return <ProductList products={products} />;
}
