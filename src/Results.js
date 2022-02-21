import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Results.css";
import Vediocard from "./Vediocard";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <Vediocard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results
