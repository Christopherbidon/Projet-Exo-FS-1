import React from "react";

const Card = ({ course }) => {
   return (
      <div className="course" id={course.idMeal}>
         <h2>{course.strMeal}</h2>
         <p>Pays : {course.strArea}</p>
         <img src={course.strMealThumb} alt="" />
      </div>
   );
};

export default Card;
