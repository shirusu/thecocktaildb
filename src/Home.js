import React, {useState} from 'react';
import {useHistory} from "react-router-dom"

const Home = () => {
    const [search, setSearch] = useState("")
    const history = useHistory()

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            history.push(`/browse/${search}`)
        }
    }

    return (
        <div>
            <input type="text" className="form-control mt-5" placeholder="Search for a Cocktail..." aria-label="Username"
                   aria-describedby="basic-addon1"
                   onChange={(e) => setSearch(e.target.value.toLowerCase())}
                   onKeyPress={handleSearch}
            />
        </div>

    );
};

export default Home;