import React, {useState, useEffect} from 'react';
import axios from "axios"
import {Link} from "react-router-dom";

const Drinks = () => {
    const [drinks, setDrinks] = useState([])
    useEffect(() => {
        axios("https://www.thecocktaildb.com/api/json/v2/1/popular.php")
            .then(({data}) => setDrinks(data.drinks))
    }, [])

    return (
        <div>
            <div className="row">
                {
                    drinks.map(item =>
                        <div key={item.idDrink} className="col-4">
                            <Link to={`/drink/${item.idDrink}`}>
                                <div className="card">
                                    <img src={item.strDrinkThumb} alt=""/>
                                    <h3>{item.strDrink}</h3>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Drinks;