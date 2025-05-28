import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {
    const [characters, setCharacters] = useState([]);

useEffect(() => {
  axios.get('https://655127797d203ab6626e943b.mockapi.io/Character_fahad')
    .then(function (response) {
      setCharacters(response.data);
    })
    .catch(function (error) {
      console.log(error);
    }
    );
}, []);

  return (
  <div className='bg-blue-100 pt-10 flex flex-col items-center'>
    <h1 className="text-center text-3xl font-bold pb-5 text-amber-900">Character List</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-5 items-center justify-center">
      {characters.map((character, index) => (
        <div key={index} className="flex flex-col items-center shadow-md rounded bg-white">
          <Link to={`/character/${index}`}>
            <img
              src={character.image}
              className="w-90 h-90 object-cover"
            />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

}

export default Home