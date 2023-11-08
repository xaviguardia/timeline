/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Badge = ({ label, variante, className }) => {
  return (
    <div className={`badge ${variante} label-${label} ${className}`}>
      {label && (
        <>
          <div className="text-wrapper-2">1</div>
          <img className="vector" alt="Vector" src="https://c.animaapp.com/HX16q0dF/img/vector-1-1@2x.png" />
        </>
      )}
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.bool,
  variante: PropTypes.oneOf(["alternative", "default"]),
};
