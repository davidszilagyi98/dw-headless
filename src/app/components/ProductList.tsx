import React, { useState, useEffect } from "react";
import Product from "./Product";
import Facet from "./Facet";
import ProductCount from "./ProductCount";
import Sort from "./Sort";
import Search from "./Search";
import URLManager from "./URLManager";
import { LoadMore } from "./LoadMore";

export default function ProductList({ products }: { products: any[] }) {
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleProducts, setVisibleProducts] = useState<number>(2);
  const [selectedSort, setSelectedSort] = useState<string>("Relevance");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const filtered = products
      .filter((product) =>
        selectedGroupIds.length === 0
          ? !product.variantId
          : product.groups.some(
              (group) =>
                selectedGroupIds.includes(group.name) && !product.variantId
            )
      )
      .filter((product) =>
        searchTerm === ""
          ? true
          : product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredProducts(filtered);

    setVisibleProducts(Math.min(2, filtered.length));
  }, [products, selectedGroupIds, searchTerm]);

  const handleSelectGroup = (selectedGroupIds: string[]) => {
    setSelectedGroupIds(selectedGroupIds);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevCount) => {
      const remainingProducts = filteredProducts.length - prevCount;
      const nextVisibleProducts =
        remainingProducts >= 2 ? prevCount + 2 : prevCount + remainingProducts;
      return nextVisibleProducts;
    });
  };

  const handleSelectSort = (sortBy: string) => {
    setSelectedSort(sortBy);
  };

  const visibleProductsList = filteredProducts.slice(0, visibleProducts);

  return (
    <div className="row py-3 py-lg-5">
      <URLManager
        selectedCheckboxes={selectedGroupIds}
        searchTerm={searchTerm}
        selectedSort={selectedSort}
        onSelectGroup={handleSelectGroup}
        onSelectSort={handleSelectSort}
      />
      <div className="d-flex justify-content-center ">
        <Search onSearch={handleSearch} />
      </div>
      <div className="d-flex  justify-content-end mb-3">
        <Sort onSelectSort={handleSelectSort} />
      </div>
      <div className="col-12 col-lg-3">
        <Facet onSelectGroup={handleSelectGroup} />
      </div>
      <div className="col-12 col-lg-9">
        <div className="row row-cols-1 row-cols-lg-3 g-3">
          {visibleProductsList.map((product) => (
            <div key={product.id} className="col d-flex">
              <Product key={product.id} product={product} />
            </div>
          ))}
        </div>
        {visibleProducts < filteredProducts.length && (
          <LoadMore onLoadMore={handleLoadMore} />
        )}
        <ProductCount
          count={filteredProducts.length}
          visibleCount={visibleProducts}
        />
      </div>
    </div>
  );
}
