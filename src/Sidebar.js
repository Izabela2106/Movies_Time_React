import React from 'react';
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { useGlobalContext } from './context';
import { genres, sortByData } from './data';
import logo from './images/1979.jpg';

const Sidebar = () => {
  const {
    sidebar,
    toggleSidebar,
    setUrl,
    toggleOrderBy,
    genresList,
    orderBy,
    toggleGenres,
    setSearchQuery,
    searchForm,
    setPage,
    setCategory,
    setOrderByQuery,
    setSortBy,
  } = useGlobalContext();

  const handleGenreClick = (name) => {
    setPage(1);

    if (name === 'Popular') {
      setUrl('https://yts.mx/api/v2/list_movies.json?limit=50&order_by=asc');
      return;
    }
    setCategory(name);
    setSortBy('rating');

    toggleSidebar();
    setSearchQuery('');
    searchForm.current.value = '';
  };

  const handleSortByClick = (name) => {
    setPage(1);

    if (name === 'year' || name === 'rating') {
      setOrderByQuery('desc');
    } else {
      setOrderByQuery('asc');
      console.log('query2');
    }
    setSortBy(name);
    toggleSidebar();

    setSearchQuery('');
    searchForm.current.value = '';
  };

  return (
    <aside className={`${sidebar ? 'sidebar ' : 'sidebar hidden'}`}>
      <div className="sidebarHeader">
        <img src={logo} alt="logo" className="logo" />
        <div className="urlName">
          <div className="socialIcons">
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillFacebook />
          </div>
          <h5>www.movietime.com</h5>
        </div>
      </div>
      <div className="sidebar_links">
        <h2 onClick={() => toggleGenres()}>Genres</h2>
        <div className={`${genresList ? 'genres' : 'genres hidden'}`}>
          {genres.map((genre) => (
            <h3 key={genre.id} className="genre" onClick={() => handleGenreClick(genre.name)}>
              {genre.text}
            </h3>
          ))}
        </div>
        <h2 onClick={() => toggleOrderBy()}>Sort By</h2>
        <div className={`${orderBy ? 'orderBy' : 'orderBy hidden'}`}>
          {sortByData.map((genre) => (
            <h3 key={genre.id} className="order" onClick={() => handleSortByClick(genre.name)}>
              {genre.text}
            </h3>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
