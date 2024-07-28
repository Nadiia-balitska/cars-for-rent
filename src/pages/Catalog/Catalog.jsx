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
} from "../../redux/cars/slice";
import {
  fetchCarsThunk,
  fetchFavoriteThunk,
} from "../../redux/cars/operations";
import { Modal } from "../../components/Modal/Modal";
import { selectNameFilter } from "../../redux/filters/slice";
import { LoadMore } from "../../components/LoadMore/LoadMore";

export const Catalog = () => {
  const [selectCar, setSelectCar] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredMemo);
  const make = useSelector(selectNameFilter);

  const page = useSelector(selectPage);
  const totalPage = useSelector(selectTotalPage);
  const isLoading = useSelector(selectLoading);
  const loadMore = useSelector(selectLoadMore);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page, make })).then(() => {
      setShowLoadMore(page < Math.ceil(totalPage / 12));
    });
  }, [dispatch, page, make, totalPage]);

  useEffect(() => {
    dispatch(fetchFavoriteThunk());
  }, [dispatch]);

  const handleModalOpen = (img) => {
    setIsOpenModal(true);
    setSelectCar(img);
  };
  const handleModalClose = () => {
    setIsOpenModal(false);
    setSelectCar(null);
  };
  const handleClick = () => {
    dispatch(nextPage()).then(() => {
      setTimeout(() => {
        const cardHeight =
          document.querySelector(".one_card")?.clientHeight || 0;
        window.scrollBy({
          top: cardHeight,
          behavior: "smooth",
        });
      }, 100);
    });
  };

  return (
    <div>
      <SearchBar />
      {isLoading ? (
        <Loader />
      ) : (
        <List
          showLoadMore={showLoadMore}
          cars={cars}
          handleModalOpen={handleModalOpen}
        />
      )}

      {loadMore && <LoadMore onClick={handleClick} />}

      {isOpenModal && (
        <Modal
          modalIsOpen={isOpenModal}
          closeModal={handleModalClose}
          selectImg={selectCar}
        />
      )}
    </div>
  );
};
