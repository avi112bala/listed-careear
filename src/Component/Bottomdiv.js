import React from "react";
import Dounetchart from "./Dounetchart";

const Bottomdiv = () => {
  return (
    <>
      <div className="bottom-main-div">
        <div className="bottom-first-div">
          <h4>Top Product</h4>
          <p>may-june 2021</p>
        </div>
        <div className="bottom-second-div">
          <div className="bottom-chart-div">
            <Dounetchart />
          </div>
          <div className="bottom-div-content">
            <div className="content">
              <h6 className="point1"></h6>
              <div className="bullet">
                <h5>Basic Tree</h5>
                <p>55%</p>
              </div>
            </div>

            <div className="content">
              <h6 className="point2"></h6>
              <div className="bullet">
                <h5>Custom Short pants</h5>
                <p>31%</p>
              </div>
            </div>


            <div className="content">
              <h6 className="point3"></h6>
              <div className="bullet">
                <h5>Super Hoodies</h5>
                <p>14%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottomdiv;
