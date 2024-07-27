// import s from "./SearchBar.module.css";
// import { changeFilter } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";
import { makes } from "../../config/makes";
import { changeFilter } from "../../redux/filters/slice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (select) => dispatch(changeFilter(select));

  return (
    <select
      onChange={(e) => handleChange(e.target.value || "")}
      className="select select-warning ml-5 flex justify-center align-middle mt-24 w-full max-w-xs"
    >
      <option disabled selected>
        Choose model
      </option>
      {makes.map((model, id) => (
        <option key={id} value={model}>
          {model}
        </option>
      ))}
    </select>
  );
};
