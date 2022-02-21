import React, { forwardRef } from 'react';
import "./Vediocard.css";
import TextTruncate from "react-text-truncate";
import {ThumbUpSharp} from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

const Vediocard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img
                src={`${base_url}${movie.backdrop_path  || movie.poster_path}` }
                alt="Movie Posters"
            />
            <TextTruncate
            line={1}
            element="p"
            truncateText="..."
            text={movie.overview}
            />
            <h4>Movie : {movie.title || movie.original_name}</h4>
            <p className="vedioCard_stats">
                {movie.release_date || movie.first_air_date}
                <ThumbUpSharp />{movie.vote_count} People like this
                </p>
        </div>
    )
});
export default Vediocard
