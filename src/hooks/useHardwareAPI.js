import { useEffect, useState } from "react";
import axios from "axios";
const api_network_address = `http://192.168.1.243:8345`;
axios.defaults.baseURL = api_network_address;

export default function useHardwareAPI() {
  const [state, setState] = useState({
    baskingTarget: 37,
    baskingCurrent: 5,
    hideTarget: 32,
    hideCurrent: 5,
    coolCurrent: 5,
    dayLightOn: true,
  });

  useEffect(() => {
    updateCurrent();
  }, [state.dayLightOn]);

  useEffect(() => {}, []);

  // Updates the current temperatures from the api
  const updateCurrent = () => {
    getTemperatureFromApi("/current")
      .then((res) => {
        updateCurrentTemperatures(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getTargetConfig()
      .then((res) => {
        updateTargetConfig(res);
      })
      .catch(() => {
        console.log(
          "unable to get target config values at the moment. Please try again later. Or dont, i'm not your dad"
        );
      });
  };

  // Updates with the current temperature targets
  const updateTargetConfig = (res) => {
    setState((stateClassic) => {
      const newState = {
        ...stateClassic,
        baskingTarget: res.data.baskingCurrent,
        hideCurrent: res.data.hideCurrent,
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
        property: res.data.hideCurrent,
        coolCurrent: res.data.coolCurrent,
      };

      return newState;
    });
  };

  const increaseBaskingTemp = () => {
    console.log("increase basking");
    // return axios.post("/baskingtargetup");
  };
  const decreaseBaskingTemp = () => {
    console.log("decrease basking");
    // return axios.post("/baskingtargetup");
  };
  const toggleDayNight = () => {
    console.log("Toggle Day Night Clicked");

    setState(() => {
      let newState = { ...state, dayLightOn: !state.dayLightOn };

      return newState;
    });

    return axios.get("/toggledaynight");
  };

  const getTargetConfig = () => {
    return axios.get("/targetconfig");
  };

  const getTemperatureFromApi = (target) => {
    return axios.get(target);
  };

  // updateCurrent();
  // setInterval(updateCurrent, 30000);

  return {
    state,
    setState,
    updateCurrent,
    increaseBaskingTemp,
    decreaseBaskingTemp,
    toggleDayNight,
  };
}
