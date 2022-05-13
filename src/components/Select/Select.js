import React from "react";
import "./SelectStyle.css";
import BoraBora from "../../assets/borabora.jpeg";
import BoraBora2 from "../../assets/borabora2.jpeg";
import KeyWest from "../../assets/keywest.jpeg";
import Maldives from "../../assets/maldives.jpeg";
import Maldives2 from "../../assets/maldives2.jpeg";
import Maldives3 from "../../assets/maldives3.jpeg";

import SelectImage from "../SelectImage/SelectImage";

function Select() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectImage bgImg={BoraBora} text="BoraBora" />
        <SelectImage bgImg={BoraBora2} text="Emerald Bay" />
        <SelectImage bgImg={KeyWest} text="Key West" />
        <SelectImage bgImg={Maldives} text="Maldives" />
        <SelectImage bgImg={Maldives2} text="Grenada" />
        <SelectImage bgImg={Maldives3} text="Barbados" />
      </div>
    </div>
  );
}

export default Select;
