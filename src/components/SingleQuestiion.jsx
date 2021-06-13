import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
   const [showInfo, setShowInfo] = useState(false);
   return (
      <article className="question">
         <header>
            <h4>{title}</h4>
            <button className="btn" onClick={() => setShowInfo(!showInfo)}>
               {!showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </button>
            {showInfo ? <p>{info}</p> : ""}
         </header>
      </article>
   );
};
export default SingleQuestion;
