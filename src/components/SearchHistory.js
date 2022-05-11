import React, { useState, useEffect } from "react";
import SearchHistoryItem from "./SearchHistoryItem";

function SearchHistory({ searchHistory, onClick, activeIp }) {
  return (
    <div className="searchHistory">
      <p className="information__label">Search History</p>
      <ul className="searchHistory__list">
        {searchHistory
          .map((e) => (
            <SearchHistoryItem
              onClick={onClick}
              ip={e.ip}
              activeIp={activeIp}
              key={e.ip}
            ></SearchHistoryItem>
          ))
          .reverse()}
      </ul>
    </div>
  );
}

export default SearchHistory;
