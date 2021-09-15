import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const db_address = process.env.REACT_APP_DATABASE_API_ADDY;

export default function useDatabaseAPI() {
  const [state, setState] = useState({});

  const seconds = 1000; // For setTimeouts

  const getAllPoops = () => {
    return axios.get(`${db_address}/poop_found`);
  };

  return { getAllPoops };
}
