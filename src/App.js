import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fectchData } from "./redux/action";
import { Form, Spinner } from "react-bootstrap";
import FoodCard from "./components/FoodCard";
import { useState } from "react";
import Footer from "./components/Footer";



function App() {
  const [text, setText] = useState("");
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
    params: {
      "nutrition-type": "cooking",
      "category[0]": "generic-foods",
      "health[0]": "alcohol-free",
      ingr: text,
    },
    headers: {
      "X-RapidAPI-Key": "01a5a483a0msha0354515791f553p18a94fjsnc2a212824ffb",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fectchData(options));
  };
  const { loading, data } = useSelector((state) => state);
  return (
  <div className="App">
    
  
  <Form action="" onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Tapez un Aliment..."/>
        <button type="submit">RECHERCHE</button>
      </Form>
      {loading ? (
        <Spinner animation="grow" variant="dark" />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {data.map((el, i) => (
            <FoodCard el={el} key={i} />
            
          ))}
         
        </div>
        
      )}
       <Footer />
    </div>
  
  );
  
}


export default App;
