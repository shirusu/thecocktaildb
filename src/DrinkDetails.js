import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from "axios"
import {Link} from "react-router-dom";

const DrinkDetails = () => {
    const [drink, setDrink] = useState({})
    const [ingredients, setIngredients] = useState([])
    const params = useParams()

    useEffect(async () => {
        const {data: {drinks}} = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        const ingredientsList = Array(15).fill(0).reduce((acc, item, idx) => {
            if (drinks[0][`strIngredient${idx + 1}`]) {
                return [...acc, drinks[0][`strIngredient${idx + 1}`]]
            }
            return acc
        }, [])
        setIngredients(ingredientsList)
        setDrink(drinks[0])
    }, [])

    return (
        <div>
        <div className="row">
            <div className="col-6">
                <h3 className="drink-title">{drink.strDrink}</h3>
                <img src={drink.strDrinkThumb} alt=""/>
            </div>
            <div className="col-6">
                <div className="row">
                    {
                        ingredients.map((item, idx) => (
                            <div key={idx} className="col-3 ingredient-list">
                                <Link to={`/ingredients/${item}`}>
                                    <img src={`https://www.thecocktaildb.com/images/ingredients/${item}.png`} alt=""/>
                                    <div className="ingredient-title">{item}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
            <div className="instructions">
                <h4 className="instructions-title">Instructions:</h4>
                <p className="instructions-desc">{drink.strInstructions}</p>
            </div>
        </div>

    );
};

export default DrinkDetails;