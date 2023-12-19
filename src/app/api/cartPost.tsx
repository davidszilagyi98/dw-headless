export default async function getCartPost() {
  const response = await fetch(
    `https://dw10dsz.public9.dynamicweb.dk/dwapi/ecommerce/carts/2838778838e34f57a4ca645c078ad568`
  );

  if (!response.ok) {
    throw new Error("failed to fetch content");
  }

  return response.json();
}
