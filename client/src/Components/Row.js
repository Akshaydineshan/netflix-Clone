import React from 'react'
import { useState, useEffect } from 'react'
import instance from '../Instance'
import '../Styles/row.css'
const base_url="https://image.tmdb.org/t/p/original/"  
function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        async function fetchData() {
          
            const reqData = await instance.get(fetchUrl)

            setmovies(reqData.data.results)
        }
        fetchData()

    },[])
    console.log("movies list", movies);


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className='rowPosters'>
                {
                    movies.map((movie) => (
                        <img src={`${base_url}${isLargeRow ?movie.poster_path:movie.backdrop_path
                        }`} 
                        alt={movie.name}
                        className="rowPoster" />
                
                ))
                }
            </div>
        </div>
    )
}

export default Row