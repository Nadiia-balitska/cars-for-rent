import { LikeBtn } from "../LikeBtn/LikeBtn";

export const Card = ({ car, handleModalOpen, key }) => {
  return (
    <>
      <li key={key}>
        <div className="card bg-base-100 w-[350px] min-h-[550px]  shadow-xl">
          <div className=" flex justify-end">
            <LikeBtn car={car} />
          </div>
          <figure className="px-10 pt-10">
            <img
              src={car.img}
              alt={car.description}
              className="rounded-xl h-[160px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <ul className="card-title flex flex-wrap gap-1">
              <li>{car?.make}</li>
              <li className="text-[#dbca07]">{car?.model},</li>
              <li>{car?.year}</li>
              <li className="flex-row justify-end">{car.rentalPrice}</li>
            </ul>

            <ul className="flex flex-wrap justify-center gap-x-3 list">
              <li>{car.type} |</li>
              <li>{car.make} |</li>
              <li>{car.id} |</li>
              <li>
                {car.functionalities.map((item) => (
                  <p key={item.id}>{item}</p>
                ))}
              </li>
            </ul>
            <div className="card-actions absolute">
              <button
                onClick={() => {
                  handleModalOpen(car);
                }}
                className="btn relative top-48 btn-warning"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

// Card.propTypes = {
//   car: PropTypes.arrayOf(
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
//   handleModalOpen: PropTypes.number.isRequired,
// };
