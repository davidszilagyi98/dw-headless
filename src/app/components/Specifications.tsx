export default function Specifications({ product }: { product: any }) {
  if (!product.productCategories || !product.productCategories.Specification) {
    return <div>No specification information available</div>;
  }

  const specificationFields = product.productCategories.Specification.fields;

  return (
    <div className="justify-content-center d-flex mt-5">
      <div className="accordion col-md-6" id="accordionExample">
        {Object.keys(specificationFields).map((fieldName) => (
          <div className="accordion-item border-warning" key={fieldName}>
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-white "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${fieldName}`}
                aria-expanded="true"
                aria-controls={`collapse${fieldName}`}>
                {specificationFields[fieldName].name}
              </button>
            </h2>
            <div
              id={`collapse${fieldName}`}
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {specificationFields[fieldName].value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
