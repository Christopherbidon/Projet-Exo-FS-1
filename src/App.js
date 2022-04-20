import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

function App() {
   const [data, setData] = useState([]);
   const [search, setSearch] = useState("beef");
   useEffect(() => {
      axios
         .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
         .then((res) => setData(res.data.meals));
   }, [search]);
   return (
      <div className="main">
         <h1>Cooking App</h1>
         <input
            type="text"
            name="search"
            id="search"
            placeholder="Recherche un ingredient"
            onChange={(e) => setSearch(e.target.value)}
         />
         <div className="courses">
            {data &&
               data.map((course, index) => (
                  <Card key={index} course={course} />
               ))}
         </div>
      </div>
   );
}

export default App;
