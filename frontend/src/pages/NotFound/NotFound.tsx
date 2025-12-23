import authbackground from "../../assets/authbackground.png";
import notFound from "../../assets/error.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      <img
        src={authbackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-6 max-w-6xl mx-auto">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={notFound}
            alt="404 Error"
            className="w-full animate-bounce transition-transform  max-w-md md:max-w-lg object-contain drop-shadow-2xl"
            style={{
              animation: "bounce 3s infinite ease-in-out",
              animationDuration: "3s",
            }}
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition-colors text-center"
            >
              Go to Dashboard
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
