import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import s from "./Header.modules.css";
// import { Header } from "../../components/Header/Haeder";

export const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562241806/autoexpress/2/94/mclaren-625c_01_0.jpg)",
      }}
    >
      <div className="hero-overlay p-11">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md ">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to us!
            </h1>
            <p className="py-4 text-lg leading-8 text-gray-900">
              We will help you to choose any type of car for rent, please FOLLOW
              us bellow.
            </p>
            <div className=" flex items-center justify-center gap-x-6">
              <Link to="/catalog" className="btn btn-active btn-warning">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* // <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://th.bing.com/th/id/OIP.QFXh3tAyzlYvUEO_IGhXZgHaE7?rs=1&pid=ImgDetMain)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 font-bold">
            We will help you to choose any type of car for rent, please FOLLOW
            us bellow 🕵🏻‍♀️
          </p>
          <Link to="/catalog" className="btn btn-neutral">
            Get Started
          </Link>
        </div>
      </div>
    </div> */
