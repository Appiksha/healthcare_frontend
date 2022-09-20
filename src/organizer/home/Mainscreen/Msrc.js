import React, { useEffect, useState } from "react";
import "../../../css/mainsrc.css";
import { SearchIco } from "../../footer/ico";
import { useHistory, Switch, Route } from "react-router-dom";
import { colorData } from "../../data";
const TopBox = () => {
  const [greettext, setGreettext] = useState("");
  const gm = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      setGreettext("good morning");
    } else if (curHr < 18) {
      setGreettext("good afternoon");
    } else {
      setGreettext("good evening");
    }
  };
  useEffect(() => {
    gm();
  }, []);

  return (
    <div className="message_Box">
      <div className="ques">How are you feeling ?</div>
      <div className="greet">{greettext}</div>
    </div>
  );
};

const Search = () => {
  const history = useHistory();
  const changeRoute = (route = "search") => {
    history.push(route);
  };
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }, []);
  return (
    <div
      onClick={() => {
        changeRoute();
      }}
      className="search_box_container"
    >
      <div className="search_box">
        <div
          href=""
          class="typewrite"
          data-period="2000"
          data-type='[ "Search Doctors and Symptoms", "Gynecologist", "Dermatologist", "Orthopedist" ,"Family Physician","Pediatrician","Cardiologist","Immunologist"]'
        >
          <span class="wrap"></span>
        </div>
      </div>
      <div className="search_button">
        <SearchIco />
      </div>
    </div>
  );
};

const MainCard = () => {
  return (
    <div className="card_container">
      <div className="card" style={{ backgroundColor: "#F6E7E6" }}></div>
    </div>
  );
};

const SuggestionBox = (props) => {
  const history = useHistory();
  const changeRoute = () => {
    history.push(`/doc/${props.color}`);
  };
  return (
    <div
      onClick={() => {
        changeRoute();
      }}
      className="suggestions"
      style={{ backgroundColor: `#${props.color}` }}
    ></div>
  );
};
const Suggestions = () => {
  return (
    <div className="suggestions_container">
      <div className="head">
        <div className="small-title-font">Show more doctors</div>
      </div>
      <div className="body">
        {Object.keys(colorData).map((key) => {
          return <SuggestionBox color={colorData[key]} />;
        })}
      </div>
    </div>
  );
};
function MainScrHome() {
  return (
    <div className="mnsrc">
      <TopBox />
      <Search />
      <MainCard />
      <Suggestions />
    </div>
  );
}
function Msrc() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    document.title = "Thesteth";
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="Main_home" style={{ width: width, height: height }}>
      <MainScrHome />
    </div>
  );
}

export default Msrc;
