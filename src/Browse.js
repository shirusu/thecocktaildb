import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios"


const Browse = () => {
    const [drinks, setDrinks] = useState([])
    const [error, setError] = useState("")
    const params = useParams()

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(res => {
                if (res.data.drinks) {
                    setDrinks(res.data.drinks)
                }else{
                    setError("Такого коктейла нет")
                }
            })
    }, [params.name])

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
            <h2>{error}</h2>
        </div>
    );
};

export default Browse;