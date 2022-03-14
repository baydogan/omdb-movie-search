import React from "react";

const Clearbutton = ({ handleClear }) => {
  return (
    <>
      <button className="clear-button" onClick={handleClear}>
        clear
      </button>
    </>
  );
};

export default Clearbutton;
