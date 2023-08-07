import React from "react";
import TotalView from "./TotalView";

const SummaryView = () => {
  return (
    <>
      <div
        className="summaryView"
        style={{
          flex: 2.5,
          display: "flex",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <TotalView />
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            flex: 5,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        ></div>
      </div>
    </>
  );
};

export default SummaryView;
