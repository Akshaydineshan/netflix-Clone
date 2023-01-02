import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import request from '../Request'

function Banner() {
    const [movie, setmovie] = useState({})

    useEffect(() => {
        async function fetchData() {

            const data = await instance.get(request.fetchTrending)
          console.log(Math.floor(Math.random() * data.data.results.length - 1))

            setmovie(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)])
        }
        fetchData()
    }, [])
    console.log("random movie", movie);
    const trunCate =(str,n)=>{
        return str?.length > n ? str.substr(0,n-1) + '.....':str
    }

    return (
        <header className='banner' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,backgroundSize:"cover"}}>
           <h1>{movie?.title || movie?.name}</h1>

           <h3 className='banner_Description'>
               {trunCate(movie.overview,150)}
           </h3>
        </header>

        
        
        
    )
}

export default Banner