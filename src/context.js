import React, { useState, useRef, useEffect, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, isSidebarOpen] = useState(false);
  const [modal, isModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  const [genresList, isGenresShown] = useState(false);
  const [orderBy, isOrderByShown] = useState(false);
  const [input, setInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [loading, isLoading] = useState(true);
  const [scroll, setScroll] = useState(true);

  const [url, setUrl] = useState();
  const [category, setCategory] = useState('comedy');
  const [sortBy, setSortBy] = useState('rating');
  const [orderByQuery, setOrderByQuery] = useState('desc');
  const [page, setPage] = useState(1);
  const searchForm = useRef(input.value);
  const [modalContent, setModalContent] = useState({});

  const openSidebar = () => {
    isSidebarOpen(true);
  };

  const closeSidebar = () => {
    isSidebarOpen(false);
  };
  const openModal = () => {
    isModalOpen(true);
  };
  const closeModal = () => {
    isModalOpen(false);
  };

  const toggleSidebar = () => {
    isSidebarOpen(!sidebar);
  };
  const toggleGenres = () => {
    isGenresShown(!genresList);
  };
  const toggleOrderBy = () => {
    isOrderByShown(!orderBy);
  };

  const toggleInput = () => {
    setInput(!input);
  };

  const defineUrl = () => {
    isLoading(true);

    if (searchQuery) {
      setUrl(
        `https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${searchQuery}&sort_by=${sortBy}&order_by=${orderByQuery}&page=${page}`,
      );
    } else {
      setUrl(
        `https://yts.mx/api/v2/list_movies.json?limit=50&genre=${category}&sort_by=${sortBy}&order_by=${orderByQuery}&page=${page}`,
      );
    }
  };

  useEffect(() => {
    defineUrl();
  }, [page, category, orderByQuery, sortBy, searchQuery]);

  const fetchData = async () => {
    isLoading(true);

    const response = await window.fetch(url);
    const newMovies = await response.json();

    setMovies((oldMovies) => {
      if (page === 1 && newMovies.data.movies) {
        return newMovies.data.movies;
      }

      if (newMovies.data.movies) {
        return [...oldMovies, ...newMovies.data.movies];
      }

      return [];
    });

    isLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const loadingRef = useRef(loading);

  useEffect(() => {
    loadingRef.current = !loading;
  }, [loading]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        loadingRef &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50 &&
        scroll
      ) {
        setScroll(false);
        loadingRef.current = false;
        setPage((oldPage) => oldPage + 1);
        setTimeout(() => {
          setScroll(true);
        }, 500);
      }
    });

    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        toggleSidebar,
        sidebar,
        setMovies,
        movies,
        loading,
        isLoading,
        modal,
        modalContent,
        setModalContent,
        genresList,
        isGenresShown,
        toggleGenres,
        toggleOrderBy,
        orderBy,
        isOrderByShown,
        url,
        setUrl,
        setInput,
        input,
        toggleInput,
        searchQuery,
        setSearchQuery,
        searchForm,
        page,
        setPage,
        orderByQuery,
        setOrderByQuery,
        sortBy,
        setSortBy,
        defineUrl,
        setCategory,
      }}
    >
      {' '}
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
