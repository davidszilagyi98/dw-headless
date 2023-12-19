interface QuantitySelectorProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
}

const Quantity: React.FC<QuantitySelectorProps> = ({ quantity, onChange }) => {
  const handleIncrement = () => {
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <button className="quantity border-0" onClick={handleDecrement}>
        -
      </button>
      <span className="mx-2">{quantity}</span>
      <button className="quantity border-0 " onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Quantity;
