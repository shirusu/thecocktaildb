import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios"
import {Link} from "react-router-dom";
import Spinner from "./Spinner";

const Ingredients = () => {
    const [items, setItems] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const {name} = useParams()

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(res => {
                setItems(res.data.drinks)
                setIsLoading(false)
            })
    }, [])
if(isLoading) return <Spinner/>
    return (
        <div className="row">
            <div className="col-6">
                <img src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`} alt=""/>
            </div>
            <div className="col-6">
                <div className="row">
                    {
                        items.map((el) => (
                            <div className="col-3 ingredient-page" key={el.idDrink}>
                                <Link to={`/drink/${el.idDrink}`}>
                                    <img src={el.strDrinkThumb} alt=""/>
                                    <div className="ingredient-title">{el.strDrink}</div>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Ingredients;
