import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_network_address = process.env.DATABASE_API_ADDY;
// axios.defaults.baseURL = api_network_address;

export default function useDatabaseAPI() {
  const [state, setState] = useState({});

  const seconds = 1000; // For setTimeouts

  const getAllPoops = () => {
    return axios.get("/poop_found");
  };

  return { getAllPoops };
}
