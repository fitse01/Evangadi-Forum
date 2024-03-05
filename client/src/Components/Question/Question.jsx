import React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
const Question = () => {
  return (
    <a href="#" className="text-decoration-none text-black">
      <hr />
      {/* user and arow container */}
      <div className="d-flex justify-content-between">
        <div className="d-md-flex align-items-center">
          {/* user and question  */}
          <div className="user">
            {/* user */}
            <div>
              <PiUserCircleDuotone />
            </div>
            <div>Fitsum </div>
          </div>
          <div>
            {/* question  */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              commodi officia sequi, delectus iusto illum non reiciendis
              tempore!
            </p>
          </div>
        </div>

        {/* arow */}
        <div className="align-items-center">
          <FaAngleRight />
        </div>
      </div>
    </a>
  );
};

export default Question;