import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {

  // 🔍 Search State
  const [input, setInput] = useState("");

  const { weather, thisLocation, values, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="text-blue-800">
      {/* Header */}
      <Header />


      {/* Main App */}
      <div className="w-full min-h-screen text-white px-8">
        <nav className="w-full p-8 flex justify-between items-center">
          {/*<h1 className="font-bold tracking-wide  text-white">
            Weather App
          </h1>*/}
          <div className="absolute top-28 right-6 z-30">
          <div className="bg-white/90 backdrop-blur-md w-[17rem] overflow-hidden shadow-2xl rounded-lg flex items-center p-3 gap-4">
            <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem] opacity-70" />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") submitCity();
              }}
              type="text"
              placeholder="Search city"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            </div>
          </div>
        </nav>

        {/* Background */}
        <BackgroundLayout />

        {/* Weather Cards */}
        <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
          <WeatherCard
            place={thisLocation}
            windspeed={weather?.wspd}
            humidity={weather?.humidity}
            temperature={weather?.temp}
            heatIndex={weather?.heatindex}
            iconString={weather?.conditions}
            conditions={weather?.conditions}
          />

          <div className="flex justify-center gap-8 flex-wrap w-[60%]">
            {values?.slice(1, 7).map((curr) => (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
