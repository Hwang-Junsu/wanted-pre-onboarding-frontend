import React from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();
  useEffect(() => {
    navigator("/signin");
  }, []);
  return <div></div>;
}
