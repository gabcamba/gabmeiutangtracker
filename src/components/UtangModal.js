import React from "react";
import AddUtangButton from "./AddUtangButton";

const UtangModal = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "blue",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            color: "#80989b",
            flex: 1,
            fontWeight: "bolder",
            fontSize: "34px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          add utang v1.0
        </div>
        <AddUtangButton />
      </div>
    </>
  );
};

export default UtangModal;
