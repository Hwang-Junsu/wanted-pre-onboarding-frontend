import React from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  useEffect(() => {
    navigator("/signin");
  }, []);
  return <div></div>;
};

export default Home;
