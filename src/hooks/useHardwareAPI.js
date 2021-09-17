import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const hardware_address = process.env.REACT_APP_HARDWARE_API_ADDY;
// axios.defaults.baseURL = api_network_address;

export default function useHardwareAPI() {
  const [state, setState] = useState({
    baskingTarget: 37,
    baskingCurrent: 5,
    hideTarget: 32,
    hideCurrent: 5,
    coolCurrent: 5,
    humidityCurrent: 0,
    dayLightOn: true,
    isSpooky: false,
  });

  const seconds = 1000; // For setTimeouts
  const updateInterval = 30 * seconds;

  // axios.listen(8899, () => {
  //   console.log("Server started at port 8899");
  // });

  const temperatureAdjust = 0.5; // The amount to change the temperature by on all adjustments

  ////////////////////////////////////////////////////////////////
  // sets the interval to watch for spooky flag
  useEffect(() => {
    updateCurrent();
    const interval = setInterval(() => {
      updateCurrent();
    }, updateInterval);
    return () => clearInterval(interval);
  }, []);

  ///////////////////////////////////////////////////////

  // Updates the current temperatures from the api
  const updateCurrent = () => {
    getTemperatureFromApi(`${hardware_address}/current`)
      .then((res) => {
        updateCurrentTemperatures(res);
      })
      .catch((err) => {});

    getTargetConfig()
      .then((res) => {
        updateTargetConfigFromAPI(res);
      })
      .catch(() => {
        console.log(
          "unable to get target config values at the moment. Please try again later. Or dont, i'm not your dad"
        );
      });
  };

  // Updates with the current temperature targets
  const updateTargetConfigFromAPI = (res) => {
    setState((stateClassic) => {
      const newState = {
        ...stateClassic,
        baskingTarget: res.data.baskingCurrent,
        hideTarget: res.data.hideCurrent,
      };

      return newState;
    });
  };

  // Updates all currently available temperatures
  const updateCurrentTemperatures = (res) => {
    setState((stateClassic) => {
      const newState = {
        ...stateClassic,
        baskingCurrent: res.data.baskingCurrent,
        hideCurrent: res.data.hideCurrent,
        coolCurrent: res.data.coolCurrent,
        humidityCurrent: res.data.humidityCurrent,
        isSpooky: res.data.isSpooky,
      };
      console.log(newState);
      return newState;
    });
  };

  ////////////////////////// WORKING HERE //////////////////////////////////////////
  ///////////////////////////////////////////////////////

  // const putTargetConfig = () => {
  //   return axios
  //     .put("/targetconfig", {
  //       baskingTarget: state.baskingTarget,
  //       hideTarget: state.hideTarget,
  //     })
  //     .catch((err) => {});
  // };

  // by default inscreases temperature but decreases if its false
  // THIS NEEDS TO BE REFACTORED INTO A SINGLE FUNCTIOn
  const adjustBaskingTemp = (increase = true) => {
    console.log("increase basking");
    // return axios.post("/baskingtargetup");

    console.log(increase);

    setState((classicState) => {
      let adjustment = temperatureAdjust;

      if (!increase) {
        adjustment *= -1;
      }

      return {
        ...classicState,
        baskingTarget: classicState.baskingTarget + adjustment,
      };
    });
  };

  // THIS NEEDS TO BE REFACTORED INTO A SINGLE FUNCTIOn
  // by default inscreases temperature but decreases if its false
  const adjustHideTemp = (increase = true) => {
    console.log("increase basking");
    // return axios.post("/baskingtargetup");

    console.log(increase);

    setState((classicState) => {
      let adjustment = temperatureAdjust;

      if (!increase) {
        adjustment *= -1;
      }

      return {
        ...classicState,
        hideTarget: classicState.hideTarget + adjustment,
      };
    });
  };

  ///////////////////////////////////////////////////////////////////////////////
  /// THIS will trigger when the user hits plus or minus in the browser
  //////////////////////////////////////////////////////////
  // useEffect(() => {
  //   putTargetConfig();
  // }, [adjustBaskingTemp]);

  const toggleDayNight = () => {
    console.log("Toggle Day Night Clicked");

    setState(() => {
      let newState = { ...state, dayLightOn: !state.dayLightOn };

      return newState;
    });

    return axios.get(`${hardware_address}/toggledaynight`);
  };

  const getTargetConfig = () => {
    return axios.get(`${hardware_address}/targetconfig`);
  };

  const getTemperatureFromApi = (target) => {
    return axios.get(target);
  };

  /// THIS CAUSES AN INFINITE RENDER LOOP
  // updateCurrent();
  // setInterval(updateCurrent, 30 * seconds);

  return {
    state,
    setState,
    updateCurrent,
    adjustBaskingTemp,
    toggleDayNight,
    adjustHideTemp,
  };
}
