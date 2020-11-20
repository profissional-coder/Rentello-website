import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
      {/* <form className="search" onSubmit={searchItems}>
        <input type="text" placeholder="search" />
        <input className="btn" type="submit" />
      </form> */}

      <div className="add-item">
        <Link className="link" to="/add">
          <button className="btn" onClick={createNewItem}>
            Add item
          </button>
        </Link>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>

      <div className="category-container">
        <Link to={{ pathname: "/user/profile", preCategory: "Device" }}>
          <div className="category">
            <img
              className="category-img"
              src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
            />
            <h3 className="category-title">Device</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Device" } }}>
          <div className="category">
            <img
              className="category-img"
              src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
            />
            <h3 className="category-title">Device</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Device" } }}>
          <div className="category">
            <img
              className="category-img"
              src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
            />
            <h3 className="category-title">Device</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Device" } }}>
          <div className="category">
            <img
              className="category-img"
              src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
            />
            <h3 className="category-title">Device</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Device" } }}>
          <div className="category">
            <img
              className="category-img"
              src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
            />
            <h3 className="category-title">Device</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Device" } }}>
          <div className="category">
            <img
              className="category-img"
              src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"
            />
            <h3 className="category-title">Device</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
