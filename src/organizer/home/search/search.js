import react from "react";
import React, { useEffect, useState } from "react";
import { useHistory, Route, Switch } from "react-router-dom";
import "../../../css/search.css";
import { SearchIco } from "../../footer/ico.js";
import Backico from "./ico.js";
import SearchResult from "./result/result";

const FloatingList = (props) => {
  const data = {
    1: "Doctor",
    2: "Fever",
    3: "Covid",
    4: "Immunologist",
    5: "Family Physician",
    6: "Cardiologist",
    7: "Pediatrician",
  };
const history = useHistory();
  return (
    <div className="floating-list" id="floatinglist">
      {Object.keys(data).map((key) => {
        return (
          <div
            className="item"
            key={key}
            onClick={() => {
              props.setQuerry(data[key]);
              document.getElementById("search-bar").value = data[key];
            history.push("/search/" + data[key]);
            }}
          >
            {data[key]}
          </div>
        );
      })}
    </div>
  );
};
// search bar
function SearchBar(props) {
  const history = useHistory();
  const [querry, setQuerry] = useState("");
  useEffect(() => {
    if (props.querry) {
      setQuerry(props.querry);
    }
  }, [querry]);
  // back button
  const backHandel = () => {
    history.goBack();
  };
  //updating querry
  const searchQuerry = (e) => {
    setQuerry(e.target.value);
  };
  // pushing url
  const searchHandel = () => {
    let regExp = /[a-zA-Z0-9]/g;
    if (regExp.test(querry)) {
      document.getElementById("search-bar").blur();
      history.push("/search/" + querry);
    }
  };
  function openFloatingList() {
    document.getElementById("floatinglist").style.display = "block";
  }

  return (
    <React.Fragment>
      <div className="header">
        <div
          className="small-part"
          onClick={() => {
            backHandel();
          }}
        >
          <Backico />
        </div>
        <div className="big-part">
          <div className="search-wrapper">
            <input
              className="search-input"
              autoComplete="off"
              type="search"
              placeholder="Search"
              id="search-bar"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  searchHandel(e);
                }
              }}
              onFocus={(e) => {
                openFloatingList();
              }}
              onBlur={(e) => {
                setTimeout(() => {
                  document.getElementById("floatinglist").style.display =
                    "none";
                }, 500);
              }}
              onChange={(e) => {
                searchQuerry(e);
                document.getElementById("floatinglist").style.display = "block";
              }}
            />
          </div>
          <div className="button-wrapper">
            <button
              tabIndex="0"
              className="search-button"
              onClick={() => {
                searchHandel();
              }}
            >
              <SearchIco />
            </button>
          </div>
        </div>
        <div className="small-part-2"></div>
      </div>
      <FloatingList setQuerry={setQuerry} />
    </React.Fragment>
  );
}

function SearchBoxItem(props) {
  const history = useHistory();
  function SearchTo(e) {
    history.push("/search/" + props.name);
  }
  return (
    <div
      className="sugges-item"
      onClick={() => {
        SearchTo();
      }}
    >
      {props.name}
    </div>
  );
}
// search suggestion box
function SuggesBox() {
  const data = {
    1: "Doctor",
    2: "Fever",
    3: "Covid",
    4: "Immunologist",
    5: "Family Physician",
    6: "Cardiologist",
    7: "Pediatrician",
  };
  return (
    <div className="sugges-box">
      <div className="head small-title-font">Try searching</div>
      <div className="body">
        {Object.keys(data).map((key) => {
          return <SearchBoxItem name={data[key]} key={key} />;
        })}
      </div>
    </div>
  );
}
// doc boxes i.e suggestions
function DocBoxes() {
  return (
    <div className="doc-box">
      <div className="head small-title-font">Suggested Doctors</div>
      <div className="body">
        <div className="doc-item" style={{ backgroundColor: "#B9CCED" }}></div>
        <div className="doc-item" style={{ backgroundColor: "#F6F6F6" }}></div>
        <div className="doc-item" style={{ backgroundColor: "#FFE2E2" }}></div>
        <div className="doc-item" style={{ backgroundColor: "#FFC7C7" }}></div>
        <div className="doc-item" style={{ backgroundColor: "#AAAAAA" }}></div>
        <div className="doc-item" style={{ backgroundColor: "#F6E5F5" }}></div>
        <div className="doc-item" style={{ backgroundColor: "#FBF4F9" }}></div>
        <div className="doc-item" style={{ backgroundColor: "#F6E7E6" }}></div>
      </div>
    </div>
  );
}
//main search body
function MainBody() {
  return (
    <div className="main-body">
      <SuggesBox />
    </div>
  );
}
// global search box
function Search() {
  useEffect(() => {
    document.title = "Search";
  }, []);
  return (
    <React.Fragment>
      <div className="search">
        <SearchBar />

        <MainBody />
      </div>
      <Switch>
        <Route path="/search/:id" component={SearchResult} />
      </Switch>
    </React.Fragment>
  );
}

export { Search, MainBody, SearchBar, SuggesBox, DocBoxes };
