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
        <input className="btn" type="submit" />
      </div>

      <div className="add-item">
        <Link className="link" to="/add">
          <button className="btn" onClick={createNewItem}>
            Add item
          </button>
        </Link>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>

      <div className="category-container">
        <div className="category">
          <img
            className="category-img"
            src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
          />
          <h3 className="category-title">Category name</h3>
        </div>

        <div className="category">
          <img
            className="category-img"
            src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
          />
          <h3 className="category-title">Category name</h3>
        </div>

        <div className="category">
          <img
            className="category-img"
            src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
          />
          <h3 className="category-title">Category name</h3>
        </div>

        <div className="category">
          <img
            className="category-img"
            src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
          />
          <h3 className="category-title">Category name</h3>
        </div>

        <div className="category">
          <img
            className="category-img"
            src="https://cdn.al-ain.com/images/2020/2/16/102-103623-a-new-nikon-camer_700x400.jpg"
          />
          <h3 className="category-title">Category name</h3>
        </div>
        <div className="category">
          <img
            className="category-img"
            src="https://cdn.al-ain.com/images/2020/2/16/102-103623-a-new-nikon-camer_700x400.jpg"
          />
          <h3 className="category-title">Category name</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
