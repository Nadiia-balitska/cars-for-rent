import { Card } from "../Card/Card";

export const List = ({ cars }) => {
  return (
    <div>
      <ul className="flex justify-center flex-row flex-wrap gap-x-[29px] gap-y-[50px] mt-5 mb-5 list_h">
        <Card cars={cars} />
      </ul>
    </div>
  );
};
