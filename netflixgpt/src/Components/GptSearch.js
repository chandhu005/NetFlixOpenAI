import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'
const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img  className="h-screen object-cover md:w-screen" src={BG_URL} alt="BackgroundImage" />
      </div>
    <div className='pt[30%]  md:p-0'>
       
        <GptSearchbar/>
        <GptMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GptSearch