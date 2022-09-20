import React, { useEffect, useState } from "react";

import "../../css/footer.css";
import { useHistory } from "react-router-dom";
import { HomeIco, SearchIco, AddIco, HeartIcon, SettingsIco } from "./ico";
export default function Footer() {
  const history = useHistory();
  const route = history.location.pathname;
  const changeRoute = (route) => {
    setIsOpen(route.replace("/", ""));
    history.push(route);
  };
  const [isOpen, setIsOpen] = useState(route.replace("/", ""));
  useEffect(() => {
    history.listen((location) => {
      if (history.action === "POP" || history.action === "PUSH") {
        setIsOpen(location.pathname.replace("/", ""));
      }
    });
  }, [isOpen]);
  return (
    <div className="Main_footer ">
      <div
        class={isOpen === "" ? "active" : ""}
        onClick={() => {
          changeRoute("");
        }}
      >
        <HomeIco />
      </div>
      <div
        class={isOpen === "search" ? "active" : ""}
        onClick={() => {
          changeRoute("search");
        }}
      >
        <SearchIco />
      </div>
      <div
        class={isOpen === "a" ? "active" : ""}
        onClick={() => {
          changeRoute("a");
        }}
      >
        <AddIco />
      </div>
      <div
        class={isOpen === "li" ? "active" : ""}
        onClick={() => {
          changeRoute("li");
        }}
      >
        <HeartIcon />
      </div>
      <div
        class={isOpen === "setting" ? "active" : ""}
        onClick={() => {
          changeRoute("setting");
        }}
      >
        <SettingsIco />
      </div>
    </div>
  );
}
