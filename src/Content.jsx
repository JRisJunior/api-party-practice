import axios from 'axios';
import {useState, useEffect} from "react";

export function Content() {

  const [environments, setEnvironments] = useState([]);

  const handleIndexEnvironments = () => {
    axios.get("http://localhost:3000/environments.json").then((response) => {
      console.log(response.data);
      setEnvironments(response.data);
    });
  };

  useEffect(handleIndexEnvironments, []);

  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>Hello hello</p>
    </div>
  );
}

// https://data.cityofchicago.org/resource/a9u4-3dwb.json