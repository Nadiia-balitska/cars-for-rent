import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/cars/slice";
import { LikeBtn, LikeFavBtn } from "../LikeBtn/LikeBtn";
import { Modal } from "../Modal/Modal";
import numeral from "numeral";

export const Card = ({ cars }) => {
  const favorites = useSelector(selectFavorite);

  if (!cars || cars.length === 0) {
    return <p>No cars available</p>;
  }
  return (
    <>
      {cars?.map((car) => {
        const formattedMileage = numeral(car.mileage).format("0,0");

        return (
          <li key={car.id} className="one_card">
            <div className="card bg-base-100 w-[350px] min-h-[550px] shadow-xl">
              <div className="flex justify-end">
                {favorites.some((one) => one.id === car.id) ? (
                  <LikeFavBtn car={car} />
                ) : (
                  <LikeBtn car={car} />
                )}
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
                  <li className="flex-row ">{car.rentalPrice}</li>
                </ul>

                <h2 className="flex flex-wrap justify-center gap-x-3 list">
                  {car.type} |{car.make} |{car.id}
                </h2>
                <h3>{formattedMileage} MILES</h3>
                {car.functionalities && car.functionalities.length > 0 && (
                  <ul className="flex text-sm justify-start gap-1 ">
                    {car.functionalities.map((func, index) => (
                      <li key={`${car.id}-func-${index}`}>{func}</li>
                    ))}
                  </ul>
                )}
                <hr />
                <div className="top-[465px] btn-warning card-actions absolute">
                  <Modal formattedMileage={formattedMileage} car={car} />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};
