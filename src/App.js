import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Drinks from "./Drinks";
import DrinkDetails from "./DrinkDetails";
import Header from "./Header";
import "./index.css"
import Home from "./Home";
import Ingredients from "./Ingredients";




const App = () => {
    return (

            <Router>
                <Header/>
                <div className="container">
                <Route exact path="/"><Home/></Route>
                <Route path="/drinks"><Drinks/></Route>
                <Route path="/drink/:id"><DrinkDetails/></Route>
                <Route path="/ingredients/:name"><Ingredients/></Route>
                </div>
            </Router>


    );
};

export default App;