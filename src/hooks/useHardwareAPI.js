import { useState } from "react";
import axios from "axios";
const api_network_address = `http://192.168.1.243:8345`;
axios.defaults.baseURL = api_network_address;

export default function useHarewareAPI() {
  const [state, setState] = useState({
    baskingTarget: 35,
    baskingCurrent: 33,
  });

  const updateBaskingCurrent = () => {
    console.log("Update Basking Temp");
    getTemperatureFromApi("/baskingCurrent")
      .then((res) => {
        console.log(res.data);

        // setState((oldState) => {
        //   return { ...oldState };
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("HARDWARE API MODULE LOADED");

  //   const setDay = (day) => setState({ ...state, day });

  //   const apiDeleteInterview = (id) => {
  //     return axios.delete(`/api/appointments/${id}`);
  //   };

  /// API CALLS TO GET DATA
  const getTemperatureFromApi = function (target) {
    return axios.get(target);
  };

  //   const apiGetAppointments = function () {
  //     return axios.get(`/api/appointments`);
  //   };
  //   const apiGetInterviewers = function () {
  //     return axios.get(`/api/interviewers`);
  //   };

  //   // Add appointment to API server
  //   const apiPutAppointment = function (appointment) {
  //     const interview = appointment.interview;

  //     return axios.put(`/api/appointments/${appointment.id}`, {
  //       interview,
  //     });
  //   };

  //   // Gets all date from API
  //   useEffect(() => {
  //     Promise.all([
  //       apiGetDays(),
  //       apiGetAppointments(),
  //       apiGetInterviewers(),
  //     ]).then((response) => {
  //       setState((stateClassic) => {
  //         const newState = {
  //           days: response[0].data,
  //           appointments: response[1].data,
  //           day: stateClassic.day,
  //           interviewers: [...Object.values(response[2].data)],
  //         };

  //         return newState;
  //       });
  //     });
  //   }, [setState]);

  //   // When the user books an appointment, this will update the api server and update the state
  //   const bookInterview = (id, interview, transitionToShow, displaySaveErr) => {
  //     const appointment = {
  //       ...state.appointments[id],
  //       interview: { ...interview },
  //     };
  //     const appointments = { ...state.appointments, [id]: appointment };

  //     apiPutAppointment(appointment)
  //       .then(() => {
  //         let newState = { ...state, appointments };

  //         setState({ ...updateSpotsForDay(newState) });

  //         transitionToShow();
  //       })
  //       .catch((err) => {
  //         console.log("haha, oh no we encountered an error haha... ", err);
  //         displaySaveErr();
  //       });
  //   };

  //   // Makes api call to delete an interview
  //   const deleteInterview = (appointment, resetVisualMode, returnToForm) => {
  //     apiDeleteInterview(appointment.id)
  //       .then(() => {
  //         const emptyAppointment = { ...appointment, interview: null };

  //         const newAppointments = {
  //           ...state.appointments,
  //           [appointment.id]: emptyAppointment,
  //         };

  //         const newState = { ...state, appointments: newAppointments };

  //         setState(updateSpotsForDay(newState));

  //         resetVisualMode();
  //       })

  //       .catch(() => {
  //         returnToForm();
  //       });
  //   };

  return { state, updateBaskingCurrent };
}
