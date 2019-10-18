import React, { useEffect, useState } from "react";

export default function SearchForm(props) {
  
  return (
    <section className="search-form">
     <form className="search" >
        <input
          type='text'
          onChange={props.handleInputChange}
          value={props.query}
          name='name'
          tabIndex='0'
          className='prompt search-name'
          placeholder='search by name'
          autoComplete='off'
        />
      </form>
    </section>
  );
}
