import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authContext } from "../../App";
import "../../css/topnav.css";

function Topnav() {
  const history = useHistory();
  const auth = useContext(authContext);
  const [name, setName] = useState("Appiksha");
  const [gender, setGender] = useState("female");
  useEffect(() => {}, []);
  const open = () => {
    history.push("/ma");
  };
  // hair
  const avatar =
    "https://avatars.dicebear.com/api/" +
    gender +
    "/" +
    name +
    ".svg?mood[]=happy&hair[]=cap";
  return (
    <div className="TopNav">
      <div className="M_m d_T">
        <div className="D_T"></div>
        <div className="D_T"></div>
        <div className="D_T"></div>
        <div className="D_T"></div>
      </div>
      <div className="N_T">Hi, {name}</div>
      <div
        onClick={() => {
          history.push("/ma");
        }}
        className="M_m"
        style={
          auth == "1"
            ? { backgroundImage: "url(" + avatar + ")" }
            : {
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
        }
      >
        {auth == "1" ? "" : "Login"}
      </div>
    </div>
  );
}
export default Topnav;
