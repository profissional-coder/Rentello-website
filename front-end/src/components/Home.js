import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import catMotors from "../img/catMotors.jpg";
import catCars from "../img/catCars.jpeg";
import catSports from "../img/catSports.jpg";
import catVrgaming from "../img/catVrgaming.jpg";
import catCamping from "../img/catCamping.jpg";
import catElectronics from "../img/catElectronics.jpg";
import catHeavyMachines from "../img/catHeavyMachines.jpg";
import catPlaces from "../img/catPlaces.jpg";

const Home = () => {
  // localStorage.setItem("token", "");
  

  return (
    <div className="container">
      {/* <form className="search" onSubmit={searchItems}>
        <input type="text" placeholder="search" />
        <input className="btn" type="submit" />
      </form> */}

      <div className="add-item">
        <Link className="link" to="/add">
          <button className="btn" >
            Add item
          </button>
        </Link>
        <br />
        <span> Rent Everything Here.</span>
        <span>
          {" "}
          Access more than 3,000 unique items anytime at a fraction of the
          buying cost..
        </span>
      </div>

      <div className="category-container">
        <Link
          to={{ pathname: "/user/profile", preCategory: "Motors/Bicycles" }}
        >
          <div className="category">
            <img className="category-img" src={catMotors} />
            <h3 className="category-title">Motors/Bicycles</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Cars" } }}>
          <div className="category">
            <img className="category-img" src={catCars} />
            <h3 className="category-title">Cars</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Sports" } }}>
          <div className="category">
            <img className="category-img" src={catSports} />
            <h3 className="category-title">Sports</h3>
          </div>
        </Link>
        <Link
          to={{ pathname: "/user/profile", state: { category: "VR Gaming" } }}
        >
          <div className="category">
            <img className="category-img" src={catVrgaming} />
            <h3 className="category-title">VR Gaming</h3>
          </div>
        </Link>
        <Link
          to={{ pathname: "/user/profile", state: { category: "Camping" } }}
        >
          <div className="category">
            <img className="category-img" src={catCamping} />
            <h3 className="category-title">Camping</h3>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/user/profile",
            state: { category: "Heavy Machines" },
          }}
        >
          <div className="category">
            <img className="category-img" src={catHeavyMachines} />
            <h3 className="category-title">Heavy Machines</h3>
          </div>
        </Link>
        <Link
          to={{ pathname: "/user/profile", state: { category: "Electronics" } }}
        >
          <div className="category">
            <img className="category-img" src={catElectronics} />
            <h3 className="category-title">Electronics</h3>
          </div>
        </Link>
        <Link to={{ pathname: "/user/profile", state: { category: "Places" } }}>
          <div className="category">
            <img className="category-img" src={catPlaces} />
            <h3 className="category-title">Places</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
