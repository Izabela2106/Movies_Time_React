import React from 'react';

import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

import { useGlobalContext } from './context';

const Navbar = () => {
  const { toggleSidebar, input, toggleInput, setSearchQuery, setUrl, searchForm } =
    useGlobalContext();
  return (
    <nav>
      <div className="nav-logo">
        <FaBars
          className="bars"
          onClick={() => {
            toggleSidebar();
          }}
        />
      </div>
      <div className="nav-center">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className="nav-cat"
          onClick={() => {
            setUrl('https://yts.mx/api/v2/list_movies.json?limit=50&order_by=asc');
          }}
        >
          Movies
        </div>
      </div>
      <div className="nav-search">
        <form className={`${input ? 'inputForm' : 'inputForm hidden'}`}>
          <input
            type="text"
            ref={searchForm}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </form>

        <BsSearch className="search" onClick={() => toggleInput()} />
      </div>
    </nav>
  );
};

export default Navbar;
