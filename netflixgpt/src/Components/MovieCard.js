import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img alt="Movie Card" className='hover:scale-90 bg-blend-darken hover:brightness-50 hover:Zoom-in'
        src={IMG_CDN_URL+posterPath }/>
    </div>
  )
}

export default MovieCard;