import React from "react";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Question = () => {
  const navigate = useNavigate();
  const handleAnswerClick = () => {
    navigate('/answer'); // Navigates to the "/answer" route
  };
  return (
    <a href="#" className="text-decoration-none text-black"  onClick={handleAnswerClick}>
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
              gshdfsjgj
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
