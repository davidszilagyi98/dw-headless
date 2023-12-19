import { useState } from "react";

interface CartItemProps {
  orderLine: {
    productName: string;
    quantity: number;
    id: string;
    price: {
      priceFormatted: string;
    };
  };

  onDelete: (itemId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ orderLine, onDelete }) => {
  const [quantity, setQuantity] = useState(orderLine.quantity);

  const handleQuantityChange = async (newQuantity: number) => {
    try {
      const updatedQuantity = Math.max(newQuantity, 0);

      const patchResponse = await fetch(
        `http://localhost:3001/dwapi/ecommerce/carts/2838778838e34f57a4ca645c078ad568/items/${orderLine.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            productVariantId: "",
            productLanguageId: "LANG1",
            quantity: updatedQuantity
          })
        }
      );

      if (!patchResponse.ok) {
        console.error("Failed to update quantity");
        return;
      }

      setQuantity(updatedQuantity);

      if (updatedQuantity <= 0) {
        const deleteResponse = await fetch(
          `http://localhost:3001/dwapi/ecommerce/carts/2838778838e34f57a4ca645c078ad568/items/${orderLine.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (!deleteResponse.ok) {
          console.error("Failed to delete item");
          return;
        }
        onDelete(orderLine.id);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    handleQuantityChange(newQuantity);
  };

  return (
    <div>
      <form>
        <label htmlFor="quantity"></label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="5"
          value={quantity}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default CartItem;
