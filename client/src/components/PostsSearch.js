import React, { useState } from "react";
import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const PostsSearch = ({ allItems, filter, props }) => {
  useEffect(() => {
    // setSearchData({ ...searchData, items: allItems });
    setFilterdItems(allItems);
    applyCategoryFilter();
  }, [allItems]);

  useEffect(() => {
    setSearchData({
      ...searchData,
      filter: { ...searchData.filter, ...filter },
    });
  }, [filter]);

  useEffect(() => {
    if (props.location.preCategory !== "") {
      setSearchData({
        ...searchData,
        filter: {
          ...searchData.filter,
          category: props.location.preCategory,
        },
      });
    }
  }, [props]);

  const [searchData, setSearchData] = useState({
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

  const [filterdItems, setFilterdItems] = useState([]);

  const applyCategoryFilter = () => {
    console.log(props.location.preCategory);
    if (!props.location.preCategory) {
      return;
    }

    let items = allItems;
    console.log(items);
    // Filter by category
    items = items.filter((item) => {
      return item.category === props.location.preCategory;
    });

    setFilterdItems(items);
  };

  const search = (e) => {
    if (e) {
      e.preventDefault();
    }

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

    // setSearchData({
    //   ...searchData,
    //   items: items,
    // });

    setFilterdItems(items);
  };

  return (
    <>
      <form onSubmit={search} className="search-form">
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
        {/* TEST */}

        <section>
          <label>Location: </label>
          <select
            value={searchData.filter.location}
            name="location"
            onChange={(e) => {
              setSearchData({
                ...searchData,
                filter: { ...searchData.filter, location: e.target.value },
              });
            }}
          >
            <option value="all">all</option>
            <option value="amman">Amman</option>
            <option value="zarqa">Zarqa</option>
            <option value="irbid">Irbid</option>
            <option value="karak">Karak</option>
            <option value="tafila">Tafila</option>
          </select>
        </section>

        {/* below delete */}
        {/* <section>
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
        </section> */}
        {/* TEST */}
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
            <option value="Motors-Bicycles">Motors / Bicycles</option>
            <option value="Cars">Cars</option>
            <option value="Sports">Sports</option>
            <option value="VR-Gaming">VR Gaming</option>
            <option value="Camping">Camping</option>
            <option value="Heavy-Machines">Heavy Machines</option>
            <option value="Electronics">Electronics</option>
            <option value="Places">Places</option>
          </select>
        </section>
        <section>
          <label>Min: </label>
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
        </section>
        <section>
          <label>Max: </label>
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
        {filterdItems.length !== 0 ? (
          filterdItems.map((item, index) => {
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
export default withRouter(PostsSearch);
