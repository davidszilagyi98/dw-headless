const cartSecret = "2838778838e34f57a4ca645c078ad568";

const addToCart = async (productDetails) => {
  const body = JSON.stringify({
    productId: productDetails.productId,
    productVariantId: productDetails.productVariantId,
    productLanguageId: productDetails.productLanguageId,
    quantity: productDetails.quantity.toString()
  });

  try {
    const response = await fetch(
      `http://localhost:3001/dwapi/ecommerce/carts/${cartSecret}/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: body
      }
    );

    console.log("Raw response:", response);

    if (!response.ok) {
      throw new Error(`Failed with status: ${response.status}`);
    }

    const data = await response.json();

    const rawResponse = await response.text();
    console.log("Raw response text:", rawResponse);

    console.log("Product added to cart:", data);
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export { addToCart };
