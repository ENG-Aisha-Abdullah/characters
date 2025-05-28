import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CharacterDetails() {
  const { index } = useParams(); 
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://655127797d203ab6626e943b.mockapi.io/Character_fahad')
      .then(function (response) {
        const charecter = response.data;
        setCharacters(charecter[index]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [index]);

  return (
  <div className='bg-blue-100 flex flex-col h-screen items-center justify-center w-full'>
    
            <div className='object-cover flex flex-col w-full  items-center'>
         <img src= {characters.image}
         className='h-90 w-90 '
         />
         </div>
         <div className="font-bold text-lg pt-5">
        <h1 className="font-bold text-xl mb-2">My Name is <span className='text-amber-900'>{characters.name}.</span></h1>
<h3 className="text-lg mb-1">Hair color: {characters.hair}</h3>
<p className="text-md">
  I am  <span className='text-amber-900'>{characters.status}, {characters.gender}, {characters.species}</span> who lives on the <span className='text-amber-900'>{characters.origin}.</span>
</p>



        </div>

       
          
         
     
      </div>
  
  );
}

export default CharacterDetails;
