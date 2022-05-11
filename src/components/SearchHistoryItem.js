import React, { useState } from "react";

function SearchHistoryItem({ ip, onClick, activeIp }) {
  const onClickHandler = (ip) => {
    onClick(ip);
  };
  return (
    <li
      onClick={() => onClickHandler(ip)}
      className={`searchHistoryItem ${
        activeIp == ip && "searchHistoryItem__active"
      }`}
    >
      {ip}
    </li>
  );
}

export default SearchHistoryItem;
