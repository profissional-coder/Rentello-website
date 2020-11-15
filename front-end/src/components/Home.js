import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [Token, setToken] = useState("true");

  const createNewItem = () => {
    //  console.log('localStorage.setItem',localStorage.getItem("token"));
    if (!!localStorage.getItem("token")) {
      setToken("true");
    } else {
      setToken("false");
    }
  };

  return (
    <div className="container">
      <div className="search ">
        <input type="text" placeholder="search" />
        <input type="submit" />
      </div>

      <div className="div_img">
        <img
          className="img"
          src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
        />
        <img
          className="img"
          src="https://cdn.al-ain.com/images/2020/2/16/102-103623-a-new-nikon-camer_700x400.jpg"
        />
        <Link className="link" to="/add">
          <button className="btn" onClick={createNewItem}>
            Add item
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
