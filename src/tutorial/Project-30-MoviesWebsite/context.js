import {
    useState,
    useRef,
    useEffect,
    useContext
} from 'react';
import React from 'react';



let link = "https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=50";

const AppContext = React.createContext();

const AppProvider = ({
    children
}) => {
    const [sidebar, isSidebarOpen] = useState(false);
    const [modal, isModalOpen] = useState(false);
    const [movies, setMovies] = useState(["xd"]);
    const [loading, isLoading] = useState(true);
    const [genresList, isGenresShown] = useState(false);
    const [orderBy, isOrderByShown] = useState(false);
    const [input, setInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    const [url, setUrl] = useState(link);

    const [dataToFetch, setDatatoFetch] = useState({
        category: "Popular",
        sortBy: "rating",
        orderBy: "desc",
    
    });


    const [modalContent, setModalContent] = useState({});

    const openSidebar = () => {
        isSidebarOpen(true);
    }


    const closeSidebar = () => {
        isSidebarOpen(false);
    }
    const openModal = () => {
        isModalOpen(true);
        console.log("opne")

    }
    const closeModal = () => {
        isModalOpen(false);
    }

    const toggleSidebar = () => {
        isSidebarOpen(!sidebar);

    }
    const toggleGenres = () => {
        isGenresShown(!genresList);
    }
    const toggleOrderBy = () => {
        isOrderByShown(!orderBy);
    }

    const toggleInput = () => {
        setInput(!input);
    }

    const fetchData = async (url) => {
        isLoading(true);
        const response = await fetch(url);
        const newMovies = await response.json();
        console.log(newMovies)
        if (newMovies.data.movies) {
            setMovies(newMovies.data.movies);
            console.log(movies);
            isLoading(false);
        }
        
        

        

    }
    const searchForm=useRef("");
    
    useEffect(() => {
        fetchData(url);

    }, [url]);

    useEffect(() => {
        setUrl(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=${dataToFetch.category}&sort_by=${dataToFetch.sortBy}&order_by=${dataToFetch.orderBy}`)
    }, [dataToFetch])

    useEffect(() => {
        setUrl(`https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${searchQuery}`)
        console.log(url)
    }, [searchQuery])





    return <AppContext.Provider value = {
            {
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
                dataToFetch,
                setDatatoFetch,
                orderBy,
                isOrderByShown,
                url,
                setUrl,
                setInput,
                input,
                toggleInput,
                searchQuery,
                setSearchQuery,
                searchForm
            }
        } > {
            children
        } <
        /AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {
    AppContext,
    AppProvider
}
