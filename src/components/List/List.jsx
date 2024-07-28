import { Card } from "../Card/Card";

export const List = ({ cars, handleModalOpen }) => {
  return (
    <div>
      <ul className="flex justify-center flex-row flex-wrap gap-x-[29px] gap-y-[50px] mt-5 mb-5 list_h">
        {cars.map((car) => (
          <Card handleModalOpen={handleModalOpen} key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

// List.propTypes = {
//   showLoadMore: PropTypes.bool.isRequired,
//   cars: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       year: PropTypes.number.isRequired,
//       make: PropTypes.string.isRequired,
//       model: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       fuelConsumption: PropTypes.number.isRequired,
//       engineSize: PropTypes.number.isRequired,
//       accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
//       functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
//       rentalPrice: PropTypes.number.isRequired,
//       rentalCompany: PropTypes.string.isRequired,
//       address: PropTypes.string.isRequired,
//       rentalConditions: PropTypes.string.isRequired,
//       mileage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   handleModalOpen: PropTypes.func.isRequired,
// };
