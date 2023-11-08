/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Fig4 } from "../../icons/Fig4";
import { Fig6 } from "../../icons/Fig6";
import { Heading } from "../Heading";
import "./style.css";

export const Avatar = ({ type, size, className, overlapGroupClassName }) => {
  return (
    <div className={`avatar ${type} ${size} ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        {size === "XL" && type === "text" && (
          <>
            <div className="box" />
            <div className="typography-content-wrapper">
              <div className="text-wrapper">AA</div>
            </div>
          </>
        )}

        {type === "text" && size === "m" && (
          <Heading
            alignment="center"
            className="heading-5"
            color="inverse"
            text="AA"
            typographyContentClassName="heading-instance"
          />
        )}

        {size === "XL" && type === "icon" && <Fig6 className="fig" />}

        {type === "image" && (
          <img
            className="ellipse"
            alt="Ellipse"
            src={
              size === "l"
                ? "https://c.animaapp.com/HX16q0dF/img/ellipse-87-1@2x.png"
                : size === "m"
                ? "https://c.animaapp.com/HX16q0dF/img/ellipse-87@2x.png"
                : "https://c.animaapp.com/HX16q0dF/img/ellipse-87-2@2x.png"
            }
          />
        )}

        {type === "icon" && ["l", "m"].includes(size) && <Fig4 className={`${size === "l" ? "class" : "class-2"}`} />}

        {type === "text" && size === "l" && <div className="div">AA</div>}
      </div>
    </div>
  );
};

Avatar.propTypes = {
  type: PropTypes.oneOf(["image", "text", "icon"]),
  size: PropTypes.oneOf(["l", "m", "XL"]),
};
