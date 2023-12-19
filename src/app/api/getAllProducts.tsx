export default async function getAllProducts() {
  const response = await fetch(
    `https://dw10dsz.public9.dynamicweb.dk/dwapi/ecommerce/products/search?RepositoryName=SwiftProducts&QueryName=Products2&ShopID=SHOP1`
  );

  if (!response.ok) {
    throw new Error("failed to fetch content");
  }

  return response.json();
}
