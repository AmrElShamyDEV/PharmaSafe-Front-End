import NavigationBar from "../Components/NavigationBarLanding";
import LandingPageImage from "../assets/LandingPageImage.jpg";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  function redirectToHome(){  
     navigate("/home");
  }
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 w-full min-h-screen flex flex-col">
      <header>
        <NavigationBar />
      </header>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Welcome to{" "}
                <span className="text-blue-700">PharmaSafe</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Your trusted companion for safe medication management. 
                Scan, analyze, and stay informed about your medications with ease.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" >
                <button
                  onClick={redirectToHome}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md text-center"
                >
                  Get Started
                </button>
                <button
                 
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 text-center"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600 rounded-2xl opacity-10 blur-xl"></div>
                <img
                  src={LandingPageImage}
                  alt="PharmaSafe medication management illustration showing pills and digital interface"
                  className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Scanning</h3>
              <p className="text-gray-600">Scan medication barcodes instantly with your phone's camera.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Analysis</h3>
              <p className="text-gray-600">Get instant drug interaction alerts and safety information.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Records</h3>
              <p className="text-gray-600">Maintain complete medication history and share with doctors.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2026 PharmaSafe. All rights reserved.</p>
            <p className="mt-2">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              {" | "}
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}