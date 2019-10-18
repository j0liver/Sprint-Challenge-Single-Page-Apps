import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'
export default function CharacterList() {
  const [peoples, setPeoples] = useState([])
  const [query, setQuery] = useState("");
  

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        // console.log(response)
        const searchResults = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        
        setPeoples(searchResults);
      })
      .catch(error => {
        console.log(error)
      })
  }, [query]);

  const handleInputChange = event => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <SearchForm handleInputChange={handleInputChange} query={query} />
      {peoples.map((people, index) => {
        return(
          <CharacterCard key={index} name={people.name} img={people.image} />
        )
      })}
    </section>
  );
}
