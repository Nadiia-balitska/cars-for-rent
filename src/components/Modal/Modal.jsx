export const Modal = ({ car, formattedMileage }) => {
  const openModal = () => {
    const modal = document.getElementById(`modal_${car.id}`);
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById(`modal_${car.id}`);
    if (modal) {
      modal.close();
    }
  };

  const handleBackdropClick = (e) => {
    const modal = document.getElementById(`modal_${car.id}`);
    if (modal && e.target === modal) {
      closeModal();
    }
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        Learn More
      </button>
      <dialog
        id={`modal_${car.id}`}
        className="modal"
        onClick={handleBackdropClick}
      >
        <div className="modal-box  w-[450px] min-h-[650px]  shadow-xl">
          <form method="dialog">
            <button
              type="button"
              className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          <div>
            <figure className="px-10 pt-10">
              <img
                src={car?.img}
                alt={car?.description}
                className="rounded-xl h-[160px]"
              />
            </figure>
            <div className="card-body flex  items-start text-center">
              <ul className="card-title gap-1">
                <li>{car?.make}</li>
                <li className="text-[#dbca07]">{car?.model},</li>
                <li>{car?.year}</li>
                <li className="flex-row ml-28 ">{car?.rentalPrice}</li>
              </ul>
              <ul className="flex flex-wrap justify-center gap-1 ">
                <h2 className="flex flex-wrap justify-center gap-x-3 list">
                  {car?.type} |{car.make} |{car.id}| fuel consumption:
                  {car.fuelConsumption}| engine size: {car.engineSize}
                </h2>

                <h3 className="outline mt-2 mb-2 stroke-slate-600">
                  {formattedMileage} MILES
                </h3>

                {car.functionalities && car.functionalities.length > 0 && (
                  <ul className="flex text-sm justify-start gap-1 ">
                    {car.functionalities.map((func, index) => (
                      <li key={`${car.id}-func-${index}`}>{func}</li>
                    ))}
                  </ul>
                )}
              </ul>
            </div>
            <h3 className="font-medium">Description:</h3>
            <hr />

            <h3 className="text-sm ">{car?.description}</h3>
            <h3 className="font-medium mt-2">
              Accessories and Functionalities:
            </h3>
            <hr />

            <ul className=" flex=row  gap-x-3 text-sm mb-5">
              {car.accessories?.map((item, id) => (
                <li key={id}>| {item} |</li>
              ))}
            </ul>

            <button className="btn  w-[150px]">
              <a href="tel:+380730000000">Rental car</a>
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
