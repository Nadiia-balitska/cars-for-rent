import { useEffect, useState } from "react";
import { LoadMore } from "../../components/LoadMore/LoadMore";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { List } from "../../components/List/List";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredMemo,
  selectPage,
  selectTotalPage,
} from "../../redux/cars/slice";
import {
  fetchCarsThunk,
  fetchFavoriteThunk,
} from "../../redux/cars/operations";
import { selectNameFilter } from "../../redux/filters/slice";
import { Modal } from "../../components/Modal/Modal";

export const Catalog = () => {
  const [isLoading] = useState(false);
  const [selectCar, setSelectCar] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector(selectNameFilter);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilteredMemo);
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page, filter }));
    setShowLoadMore(page < Math.ceil(totalPage / 12));
  }, [dispatch, page, totalPage, filter]);

  useEffect(() => {
    dispatch(fetchFavoriteThunk());
    setShowLoadMore(page < Math.ceil(totalPage / 12));
  }, [totalPage, page, dispatch]);

  const handleModalOpen = (img) => {
    setIsOpenModal(true);
    setSelectCar(img);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectCar(null);
  };

  return (
    <div>
      <SearchBar />

      {cars.length ? (
        <List handleModalOpen={handleModalOpen} />
      ) : (
        <p>We do not have such type of cars </p>
      )}
      {showLoadMore && <LoadMore />}
      {isLoading && <Loader />}
      {isOpenModal && (
        <Modal
          modalIsOpen={isOpenModal}
          closeModal={closeModal}
          selectImg={selectCar}
        />
      )}
    </div>
  );
};
