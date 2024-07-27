import { Bars } from "react-loader-spinner";
import s from "./Loader.modules.css";

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <Bars
        height="40"
        width="40"
        color="black"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};
