import React, {Suspense} from "react";
import CurrentWeatherSummary from "../components/CurrentWeatherSummary";
import HourlyWeatherList from "../components/HourlyWeatherList";

function Main() {




  return (
      <div className="row ">
          <Suspense fallback={<p>LOADING...</p>}>
              <CurrentWeatherSummary/>
          </Suspense>

          <Suspense fallback={<p>LOADING...</p>}>
              <HourlyWeatherList/>
          </Suspense>

      </div>
  );
}

export default Main;
