/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FigSet } from "../FigSet";
import { TimelineLevel } from "../TimelineLevel";
import "./style.css";

export const Timeline = ({
  extra = false,
  fig1 = true,
  level2 = true,
  checkbox = false,
  paymentIcon = false,
  reaction = false,
  buttonExtra = false,
}) => {
  return (
    <div className="timeline">
      <div className="left-2">
        {fig1 && (
          <div className="fig-2">
            <FigSet badge={false} childRight={false} className="fig-set" size="s" type="avatar" />
          </div>
        )}

        <div className="text-2">
          <div className="frame">
            <div className="typography-content-3">Concepto</div>
          </div>
          {level2 && <div className="typography-content-4">01/01/2021</div>}
        </div>
      </div>
      <div className="right-2">
        <div className="typography-amount">-99,00€</div>
        <TimelineLevel />
      </div>
    </div>
  );
};

Timeline.propTypes = {
  extra: PropTypes.bool,
  fig1: PropTypes.bool,
  level2: PropTypes.bool,
  checkbox: PropTypes.bool,
  paymentIcon: PropTypes.bool,
  reaction: PropTypes.bool,
  buttonExtra: PropTypes.bool,
};
