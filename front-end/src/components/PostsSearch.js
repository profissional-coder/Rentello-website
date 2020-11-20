import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PostsSearch = ({ allItems, filter }) => {
  useEffect(() => {
    setSearchData({ ...searchData, items: allItems });
  }, [allItems]);

  useEffect(() => {
    setSearchData({
      ...searchData,
      filter: { ...searchData.filter, ...filter },
    });
  }, [filter]);

  const [searchData, setSearchData] = useState({
    items: [],
    filter: {
      searchText: "",
      location: "",
      category: "all",
      startDate: "",
      endDate: "",
      startPrice: 0,
      endPrice: 0,
    },
  });

  const search = (e) => {
    e.preventDefault();

    let items = allItems;
    const {
      searchText,
      category,
      startDate,
      endDate,
      startPrice,
      endPrice,
      location,
    } = searchData.filter;
    console.log(searchText);

    // Filter by Title
    // items = items.filter((item) => {
    //   return item.name.toLowerCase().includes(searchText.toLowerCase());
    // });

    // Filter by Location
    items = items.filter((item) => {
      return item.location.toLowerCase().includes(location.toLowerCase());
    });

    // Filter by category
    if (category !== "all") {
      items = items.filter((item) => {
        return item.category === category;
      });
    }

    // Filter by date
    if (startDate !== "" && endDate !== "") {
      items = items.filter((item) => {
        return item.post_date > startDate && item.to_date > endDate;
      });
    }

    //Filter by price
    if (startPrice != 0) {
      items = items.filter((item) => {
        return item.price > startPrice;
      });
    }
    if (endPrice != 0) {
      items = items.filter((item) => {
        return item.price < endPrice;
      });
    }

    setSearchData({
      ...searchData,
      items: items,
    });
  };

  return (
    <>
      <form onSubmit={search} className="form">
        <section>
          <label>Title: </label>
          <input
            type="text"
            name="searchText"
            value={searchData.filter.searchText}
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, searchText: e.target.value },
              });
            }}
          />
        </section>
        <section>
          <label>Location: </label>
          <input
            type="text"
            name="searchText"
            value={searchData.filter.location}
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, location: e.target.value },
              });
            }}
          />
        </section>
        <section>
          <label>Category: </label>
          <select
            value={searchData.filter.category}
            name="category"
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, category: e.target.value },
              });
            }}
          >
            <option value="all">all</option>
            <option value="flate">flate</option>
            <option value="appliances">appliances</option>
          </select>
        </section>
        <section>
          <label>Start date: </label>
          <input
            type="date"
            name="trip-start"
            value={searchData.filter.startDate}
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, startDate: e.target.value },
              });
            }}
          />
          <label>End date: </label>
          <input
            type="date"
            name="trip-start"
            value={searchData.filter.endDate}
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, endDate: e.target.value },
              });
            }}
          />
        </section>
        <section>
          <label>Start price: </label>
          <input
            type="number"
            value={searchData.filter.startPrice}
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, startPrice: e.target.value },
              });
            }}
          />
          <label>End price: </label>
          <input
            type="number"
            value={searchData.filter.endPrice}
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, endPrice: e.target.value },
              });
            }}
          />
        </section>
        <button className="btn">Apply filter</button>
      </form>

      <div className="post-container">
        {searchData.items.length !== 0 ? (
          searchData.items.map((item, index) => {
            return (
              <Link
                key={index}
                className="link"
                to={{
                  pathname: "/rent",
                  state: item.post_id,
                }}
                style={{ textDecoration: "none" }}
              >
                <div num={index + 1} key={index} className="post-item">
                  <div className="post-info">
                    <h2 className="post-title">
                      {item.name}
                      <span>
                        Post {index + 1} || posted at: {item.postdate}
                      </span>
                    </h2>
                    <span>Category: {item.category}</span>
                    <span>Location: {item.location}</span>
                    <span>Price: {item.price}</span>
                  </div>
                  <img className="img" src={item.img_url} alt="post image" />
                </div>
              </Link>
            );
          })
        ) : (
          <p>Cant find any items with this filter...</p>
        )}
      </div>
    </>
  );
};
export default PostsSearch;
