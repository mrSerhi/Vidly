import React from "react";
import spinnerSVG from "./Spin-1s-30px.svg";

const Spinner = () => {
  return (
    <div className="col-dm-6 mx-auto">
      <img src={spinnerSVG} alt="loading" />
    </div>
  );
};

export default Spinner;
