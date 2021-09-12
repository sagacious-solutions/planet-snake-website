import { useEffect, useState } from "react";
import axios from "axios";

const api_network_address = `http://localhost:8081`;
axios.defaults.baseURL = api_network_address;

export default function useDatabaseAPI() {
  const [state, setState] = useState({});

  const seconds = 1000; // For setTimeouts

  const getAllPoops = () => {
    return axios.get("/poop_found");
  };

  return { getAllPoops };
}
