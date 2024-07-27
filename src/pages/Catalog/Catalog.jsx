import { useState } from "react";
import { LoadMore } from "../../components/LoadMore/LoadMore";

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  return <div>{showLoadMore && <LoadMore onClick={handleLoadMore} />}</div>;
};
