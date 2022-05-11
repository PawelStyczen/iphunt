import { useEffect, useState } from "react";

import Header from "./components/Header";

import Information from "./components/Information";
import Map from "./components/Map";
import SearchHistory from "./components/SearchHistory";

function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchIp, setSearchIp] = useState("");
  const [location, setLocation] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;

  //? check if screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const updateMedia = () => {
    window.innerWidth > 800 && setShowMobileMenu(true);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    getUserIp();
  }, []);

  const getUserIp = () => {
    fetch(`/api/check?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setUserLocation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getIpDetails = (e) => {
    e.preventDefault();
    if (checkIfValidIp(searchIp)) {
      fetch(`/api/${searchIp}?access_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLocation(data);
          setSearchHistory([
            ...searchHistory,
            { ip: data.ip, data: { ...data } },
          ]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("invalid ip");
    }
  };

  const loadSearchHistoryData = (ip, evt) => {
    setLocation(searchHistory.find((e) => e.ip == ip).data);
    setSearchIp("");
  };

  const showSearchHistory = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const checkIfValidIp = (str) => {
    // Regular expression to check if string is a IP address
    const regexExp =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

    return regexExp.test(str);
  };

  return (
    <div className="app">
      <Header onMobileClick={showSearchHistory}></Header>
      <div className="app_container">
        {showMobileMenu && (
          <SearchHistory
            searchHistory={searchHistory}
            onClick={loadSearchHistoryData}
            activeIp={location.ip}
          />
        )}
        <div className="container">
          <Map
            latitude={userLocation && userLocation.latitude}
            longitude={userLocation && userLocation.longitude}
          ></Map>
          <Information
            location={userLocation}
            label="User Location"
          ></Information>
          <form className="form" onSubmit={getIpDetails}>
            <input
              className="search"
              type="search"
              value={searchIp}
              required="true"
              onChange={(e) => {
                setSearchIp(e.target.value);
              }}
            ></input>
            <input className="btn" type="submit" value="search IP"></input>
          </form>
          <Map
            latitude={location && location.latitude}
            longitude={location && location.longitude}
          ></Map>
          <Information location={location} label="Searched Ip"></Information>
        </div>
      </div>
    </div>
  );
}

export default App;
