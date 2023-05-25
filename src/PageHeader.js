import React from "react";

export const PageHeader = () => {
  return (
    <>
      <div
        className="container text-white"
        style={{
          border: "1px solid #008B8B",
          borderRadius: "10px",
          marginBottom: "40px",
          marginTop: "40px"
        }}
      >
        <p
          style={{
            fontFamily: "Trocchi",
            color: "#008B8B",
            fontSize: "20px",
            fontWeight: "normal",
            lineHeight: "48px",
            textAlign: "center"
          }}
        >
          Create and Save Your Model Below
        </p>

        <div style={{ marginTop: "10px" }}> </div>
      </div>
    </>
  );
};

export default PageHeader;
