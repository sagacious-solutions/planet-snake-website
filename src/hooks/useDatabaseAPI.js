import { useEffect, useState } from "react";
import axios from "axios";

const api_network_address = `http://192.168.1.243:8345`;
axios.defaults.baseURL = api_network_address;
