import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { LoadMore } from "../LoadMore/LoadMore";
import { nextPage } from "../../redux/cars/slice";
import { selectNameFilter } from "../../redux/filters/slice";

export const List = ({ cars, showLoadMore }) => {
  const dispatch = useDispatch();
  //   const cars = useSelector(selectNameFilter);

  return (
    <>
      <ul>
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </ul>
      {showLoadMore && <LoadMore onClick={() => dispatch(nextPage())} />}
    </>
  );
};
