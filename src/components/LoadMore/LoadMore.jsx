import { useDispatch } from "react-redux";
import { nextPage } from "../../redux/cars/slice";
import css from "./LoadMore.module.css";

export const LoadMore = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(nextPage());
  };
  return (
    <div>
      <button className={css.btn} onClick={handleClick} type="button">
        Load More
      </button>
    </div>
  );
};
