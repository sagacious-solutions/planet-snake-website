import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const hardware_address = process.env.REACT_APP_HARDWARE_API_ADDY;

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

  const TIME_BETWEEN_VALUE_UPDATES_IN_MS = 30000;

  // When adjusting control values on home page, this is amount in Celcius it will adjust it by
  const TARGET_TEMP_CHANGE_AMOUNT = 0.5;

  // Starts a loop that updates the temperature for the home dashboard
  useEffect(() => {
    updateCurrent();

    const SENSOR_VALUES_UPDATE_LOOP = setInterval(() => {
      updateCurrent();
    }, TIME_BETWEEN_VALUE_UPDATES_IN_MS);

    return () => clearInterval(SENSOR_VALUES_UPDATE_LOOP);
  }, []);

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
      .catch(() => {});
  };

  // Fetches the current temperature targets from the hardware API
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

  const putTargetConfig = () => {
    return axios
      .put("/targetconfig", {
        baskingTarget: state.baskingTarget,
        hideTarget: state.hideTarget,
      })
      .catch((err) => {});
  };

  // THIS NEEDS TO BE REFACTORED INTO A SINGLE FUNCTIOM
  // by default inscreases temperature but decreases if its false
  const adjustBaskingTemp = (increase = true) => {
    console.log("increase basking");
    // return axios.post("/baskingtargetup");

    console.log(increase);

    setState((classicState) => {
      let adjustment = TARGET_TEMP_CHANGE_AMOUNT;

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
    setState((classicState) => {
      let adjustment = TARGET_TEMP_CHANGE_AMOUNT;

      if (!increase) {
        adjustment *= -1;
      }

      return {
        ...classicState,
        hideTarget: classicState.hideTarget + adjustment,
      };
    });
  };

  const toggleDayNight = () => {
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

  return {
    state,
    setState,
    updateCurrent,
    adjustBaskingTemp,
    toggleDayNight,
    adjustHideTemp,
  };
}
