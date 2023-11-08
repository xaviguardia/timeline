/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Fig27 } from "../../icons/Fig27";
import { Fig4 } from "../../icons/Fig4";
import { Property148 } from "../../icons/Property148";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import "./style.css";

export const FigSet = ({ childRight = true, badge = true, type, size, className }) => {
  return (
    <div className={`fig-set size-1-${size} type-0-${type} ${className}`}>
      {["l", "m"].includes(size) && (
        <div className="div-2">
          {type === "avatar" && (
            <div className="overlap-group-2">
              <Avatar
                className={`${size === "l" ? "class-4" : "class-5"}`}
                overlapGroupClassName={`${size === "m" && "class-3"}`}
                size={size === "l" ? "XL" : "l"}
                type="text"
              />
              {badge && (
                <Badge className={`${size === "l" ? "class-6" : "class-7"}`} label={false} variante="default" />
              )}

              {childRight && (
                <div className="child-right">
                  <Fig27 className={`${size === "l" ? "fig-2-7" : "fig-2-8"}`} />
                </div>
              )}
            </div>
          )}

          {type === "icon" && size === "m" && (
            <div className="fig-wrapper">
              <Fig4 className="fig-4" />
            </div>
          )}

          {(type === "image" || (size === "m" && type === "icon")) && (
            <>
              <>
                {badge && (
                  <Badge className={`${size === "l" ? "class-6" : "class-7"}`} label={false} variante="default" />
                )}
              </>
              <>
                {childRight && (
                  <div className="fig-2-7-wrapper">
                    <Fig27 className={`${size === "l" ? "fig-2-7" : "fig-2-8"}`} />
                  </div>
                )}
              </>
            </>
          )}

          {size === "l" && type === "icon" && (
            <>
              <Property148 className="property-1-48" />
              <>{badge && <Badge className="badge-instance" label={false} variante="default" />}</>
              <>
                {childRight && (
                  <div className="fig-2-8-wrapper">
                    <Fig27 className="fig-2-7" />
                  </div>
                )}
              </>
            </>
          )}
        </div>
      )}

      {size === "s" && type === "avatar" && <Avatar className="avatar-instance" size="m" type="text" />}

      {size === "s" && ["icon", "image"].includes(type) && (
        <div className="placeholder">{type === "icon" && <Fig4 className="fig-4-instance" />}</div>
      )}

      {size === "s" && (
        <>
          <>
            {childRight && (
              <div className="child-right-wrapper">
                {childRight && (
                  <div className="child-right-2">
                    <Fig27 className="fig-2-8" />
                  </div>
                )}
              </div>
            )}
          </>
          <>{badge && <Badge className="instance-node" label={false} variante="default" />}</>
        </>
      )}
    </div>
  );
};

FigSet.propTypes = {
  childRight: PropTypes.bool,
  badge: PropTypes.bool,
  type: PropTypes.oneOf(["avatar", "image", "icon"]),
  size: PropTypes.oneOf(["l", "m", "s"]),
};
