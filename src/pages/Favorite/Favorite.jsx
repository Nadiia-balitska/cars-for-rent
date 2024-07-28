import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/cars/slice";
import { List } from "../../components/List/List";
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/cars/operations";

export const Favorite = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);

  useEffect(() => {
    if (favorites.length === 0) {
      dispatch(fetchCarsThunk());
    }
  }, [dispatch, favorites.length]);

  if (!favorites || favorites.length === 0) {
    return (
      <>
        <img
          src="https://cdn.dribbble.com/users/2097172/screenshots/12189388/media/5181e8b8d02180a3288d6adc89ebf1b2.gif"
          alt="Nothing is here"
        />
      </>
    );
  }
  return (
    <div className="mt-36">
      {favorites.length > 0 ? (
        <List cars={favorites} />
      ) : (
        <h3>Nothing is here</h3>
      )}
    </div>
  );
};
