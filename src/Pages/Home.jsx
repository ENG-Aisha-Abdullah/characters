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
    <div className="  ">
      <h1 className="">Character List</h1>
      <div className="">
        {characters.map((character, index) => (
          <div className="" key={character.id}>
            <div className="">
                <Link to={`/character/${index}`} key={index}>
                <img src={character.image}/>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home