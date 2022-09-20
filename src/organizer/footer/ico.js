import React from "react";

function HomeIco() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline
          fill="var(--background)"
          points="9 22 9 12 15 12 15 22"
        ></polyline>
      </svg>
    </div>
  );
}

function SearchIco() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  );
}
function AddIco() {
  return (
    <div className="Icon_container doc">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17.17 23.42"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1px"
      >
        <path
          d="M8,5.62c0,2.68,1.82,4.84,4.05,4.84s4.06-2.16,4.06-4.84a5.73,5.73,0,0,0-.74-3.05A4,4,0,0,0,12.06.79,4,4,0,0,0,8.59,2.67,6,6,0,0,0,8,5.62Z"
          transform="translate(-3.42 -0.29)"
        />
        <path
          d="M3.92,23.18l16.11,0,0-5.28s0-4.21-5.26-6.1L12,15,9.13,11.83a6.87,6.87,0,0,0-5.21,6.26Z"
          transform="translate(-3.42 -0.29)"
        />
        <line x1="12.51" y1="17.25" x2="12.51" y2="21.03" />
        <line x1="10.61" y1="19.14" x2="14.41" y2="19.13" />
      </svg>
    </div>
  );
}

function HeartIcon() {
  return (
    <div className="Icon_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </div>
  );
}

function SettingsIco() {
  return (
    <div className="Icon_container setting">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-settings"
      >
        
        <path  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </div>
  );
}
export { HomeIco, SearchIco, AddIco, HeartIcon, SettingsIco };
