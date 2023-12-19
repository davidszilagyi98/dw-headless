import { FC } from "react";
import Image from "next/image";
import next from "../img/Delete.png";

interface DeleteButtonProps {
  itemId: string;
  onDelete: (itemId: string) => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ itemId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/dwapi/ecommerce/carts/2838778838e34f57a4ca645c078ad568/items/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.ok) {
        onDelete(itemId);
      } else {
        console.error("Failed to delete item:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="d-flex">
      <p>Delete</p>
      <Image
        src={next}
        alt="delete"
        width={30}
        height={30}
        className=""
        onClick={handleDelete}
      />
    </div>
  );
};

export default DeleteButton;
