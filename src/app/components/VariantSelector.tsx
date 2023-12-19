export default function VariantSelector({ product }: { product: any }) {
  if (!product.variantInfo || !product.variantInfo.variantInfo) {
    return <div>No variant information available</div>;
  }

  return (
    <div className="d-flex gap-3 mb-3 mt">
      {product.variantInfo.variantInfo.map((variant: any) => (
        <div
          className="rounded"
          key={variant.optionID}
          style={{
            backgroundColor: variant.optionColor,
            width: "50px",
            height: "50px"
          }}></div>
      ))}
    </div>
  );
}
