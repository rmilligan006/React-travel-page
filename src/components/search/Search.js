import React from "react";
import "./SearchStyles.css";
import gold from "../../assets/gold.png";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Jelly beans bonbon I love carrot cake wafer candy canes jujubes I
            love macaroon. Caramels I love sweet danish oat cake. Biscuit
            chocolate cake jelly-o danish bear claw icing tootsie roll. Gummies
            soufflé cupcake I love sweet biscuit biscuit chocolate cake I love.
            Macaroon sweet chocolate cake soufflé biscuit cheesecake. Croissant
            halvah I love pudding sugar plum. Danish cake I love biscuit
            macaroon marshmallow halvah. Brownie tiramisu oat cake cake ice
            cream. Danish tart marzipan cupcake soufflé. Icing croissant powder
            jelly-o soufflé sweet roll donut. Sugar plum topping jelly beans
            candy canes topping.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save"> GET AN ADDITIONAL 10% OFF</h4>
            <p className="timer">12 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Grande Antigua</option>
                <option value="2">Barbados</option>
                <option value="3">Grenada</option>
                <option value="4">Emerald Bay</option>
                <option value="5">Bora Bora</option>
                <option value="6">Maldives</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-in</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availabilities</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
