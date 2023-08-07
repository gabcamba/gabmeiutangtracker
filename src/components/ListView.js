import React from "react";

const ListView = ({ utangs }) => {
  return (
    <>
      <div
        className="ListView"
        style={{
          // backgroundColor: "white",
          borderRadius: "10px",
          flex: 6.5,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        {utangs.map((utang) => (
          <div
            style={{
              display: "flex",
              gap: 5,
              height: "80px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
              borderRadius: "10px",
              backgroundColor: "#80989b",
                color: "#dcd4da",
                fontSize: "30px",
                fontWeight: "bold",
                paddingLeft: "10px",
                display: "flex",
                gap: 5,
                flex: 6,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {utang.name}
            </div>
            <div
              style={{
              borderRadius: "10px",
              backgroundColor: "red",
                color: "#dcd4da",
                fontSize: "30px",
                fontWeight: "bold",
                paddingLeft: "10px",
                display: "flex",
                gap: 5,
                flex: 2,
                justifyContent: "flex-start",
                alignItems: "center",
                wordWrap: 'break-word'
              }}
            >
              {utang.amount || ''}
            </div>
            <div
              style={{
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
                flex: 2,
                backgroundColor: "limegreen",
                borderRadius: "10px",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              paid
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListView;
