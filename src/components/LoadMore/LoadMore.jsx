import css from "./LoadMore.modules.css";

export const LoadMore = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick} type="button">
      Load More
    </button>
  );
};
