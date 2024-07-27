import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <h2 className=" font-bold text-lg leading-8text-gray-900">
            Car rent
          </h2>
          {/* <img
            alt=""
            src="https://img.freepik.com/premium-vector/car-rental-logo-vector_221979-136.jpg?w=100"
            className="h-8 w-auto"
          /> */}
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink className="btn btn-outline btn-active " to="/catalog">
            Catalog
          </NavLink>

          <NavLink className="btn btn-outline btn-secondary" to="/favorites">
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
//  <div className="flex lg:flex-1">
//     <h2 className="sr-only">Car Rental</h2>
//     {/* <img
//       className="h-8 w-auto"
//       src="https://img.freepik.com/premium-vector/car-rental-logo-vector_221979-136.jpg?w=2000"
//       alt=""
//     /> */}
//   </div>

//   <div className="hidden lg:flex lg:gap-x-12">
// <NavLink
//   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//   to="/catalog"
// >
//   Catalog
// </NavLink>

// <NavLink
//   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//   to="/favorites"
// >
//   Favorites
// </NavLink>
// </div>

{
  /* <header>
        <h2>Car Rental</h2>
        <ul>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>

          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </header> */
}
