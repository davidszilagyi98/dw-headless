import { useEffect } from "react";

const URLManager = ({
  selectedCheckboxes,
  searchTerm,
  selectedSort,
  onSelectGroup,
  onSelectSort,
}) => {
  useEffect(() => {
    const query = selectedCheckboxes
      .map((id) => `FacetGroupSettings.FacetGroupNames=${id}`)
      .join("&");

    const sortQuery =
      selectedSort && selectedSort !== "Relevance"
        ? `&SortBy=${selectedSort}`
        : "";

    const newUrl = `/standard/products?RepositoryName=SwiftProducts&QueryName=Products2${
      query && `&${query}`
    }${searchTerm && `&search=${searchTerm}`}${sortQuery}`;

    window.history.replaceState({}, "", newUrl);
  }, [selectedCheckboxes, searchTerm, selectedSort]);

  return null;
};

export default URLManager;
