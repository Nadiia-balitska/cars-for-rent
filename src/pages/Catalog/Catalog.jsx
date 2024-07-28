import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { List } from "../../components/List/List";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  selectFilteredMemo,
  selectLoading,
  selectLoadMore,
  selectPage,
  selectTotalPage,
  totalPage,
} from "../../redux/cars/slice";
import {
  fetchCarsThunk,
  fetchFavoriteThunk,
} from "../../redux/cars/operations";
import { selectNameFilter } from "../../redux/filters/slice";
import { LoadMore } from "../../components/LoadMore/LoadMore";

export const Catalog = () => {
  const [showLoadMore, setShowLoadMore] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredMemo);
  const make = useSelector(selectNameFilter);

  const page = useSelector(selectPage);
  const summeryPage = useSelector(selectTotalPage);
  const isLoading = useSelector(selectLoading);
  const loadMore = useSelector(selectLoadMore);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page, make })).then(() => {
      setShowLoadMore(page < Math.ceil(summeryPage / 12));
    });
  }, [dispatch, page, make, summeryPage]);

  useEffect(() => {
    dispatch(fetchFavoriteThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   if (page > 1) {
  //     dispatch(totalPage());
  //     const cardHeight = document.querySelector(".one_card")?.clientHeight || 0;
  //     window.scrollBy({
  //       top: cardHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [dispatch, page]);

  const handleClick = () => {
    dispatch(nextPage());
    dispatch(totalPage());

    dispatch(fetchCarsThunk({ page: page + 1, make })).then(() => {
      const cardHeight = document.querySelector(".one_card")?.clientHeight || 0;
      setTimeout(() => {
        window.scrollBy({ top: cardHeight, behavior: "smooth" });
      }, 500);
    });
  };

  return (
    <div>
      <SearchBar />
      {isLoading ? (
        <Loader />
      ) : (
        <List showLoadMore={showLoadMore} cars={cars} />
      )}

      {loadMore && <LoadMore onClick={handleClick} />}
    </div>
  );
};
