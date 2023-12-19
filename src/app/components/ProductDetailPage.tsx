import React, { useState } from "react";
import { getServerUrl } from "../api/server";
import Specifications from "./Specifications";
import VariantSelector from "./VariantSelector";
import AddToCartButton from "../components/AddToCartButton";
import { addToCart } from "../api/addToCart";

interface ProductDetailPageProps {
  product: {
    id: string;
    name: string;
    assetCategories: Array<{ assets: Array<{ name: string; value: string }> }>;
    shortDescription: string;
    primaryOrDefaultGroup: { name: string };
    price: { priceFormatted: string };
    variantInfo: { productStock: number };
    stockLevel: number;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    getServerUrl(product.assetCategories[0].assets[0].value)
  );

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  function createMarkup() {
    return { __html: product.shortDescription };
  }

  const handleAddToCart = async (productDetails) => {
    try {
      await addToCart(productDetails);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    handleQuantityChange(newQuantity);
  };

  return (
    <div className="m-5">
      <div className="row row-cols-1 row-cols-sm-2 d-flex justify-content-center mx-auto">
        <div className="col d-grid justify-content-end ">
          <img
            className="float-end me-5 img-fluid "
            width={500}
            height={500}
            src={selectedImage}
          />
          <div className="mt-3">
            {product.assetCategories[0].assets.map((asset: any) => (
              <img
                width={100}
                height={100}
                key={asset.name}
                className="additional-image"
                src={getServerUrl(asset.value)}
                alt={product.name}
                onClick={() => handleImageClick(getServerUrl(asset.value))}
              />
            ))}
          </div>
        </div>

        <div className="col align-self-center">
          <h3>{product.name}</h3>
          <p>{product.primaryOrDefaultGroup.name}</p>
          <p dangerouslySetInnerHTML={createMarkup()} />
          <p>{product.price.priceFormatted}</p>
          <p>Color</p>
          <div className="d-flex gap-3 mb-3">
            <VariantSelector product={product} />
          </div>
          <div>
            <AddToCartButton
              productDetails={{
                productId: product.id,
                productLanguageId: "LANG1",
                productVariantId: "",
                quantity: quantity,
                stock: product.variantInfo.productStock
              }}
              onAddToCart={handleAddToCart}
            />
            <form>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max={product.variantInfo.productStock}
                value={quantity}
                onChange={handleInputChange}
              />
            </form>
            <p>{product.variantInfo.productStock} in stock</p>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="d-flex justify-content-center mt-5">Specifications</h4>
        <Specifications product={product} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
