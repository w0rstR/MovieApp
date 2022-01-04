
import './App.css';
import Movie from "./components/Movie";
import {useEffect, useState} from "react";

const FEATURED_API='https://api.themoviedb.org/3/discover/movie?sorty_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
const SEARCH_API='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

function App() {
  const[movies,setMovies]=useState([])
    const [searchTerm,setSearchTerm] = useState('')
  useEffect(()=>{
    fetch(FEATURED_API)
        .then(response=>{
          return response.json()
        }).then(data=>{
          console.log(data)
          setMovies(data.results)
    })
  },[])

    const hendleOnSubmit=(e)=>{
      e.preventDefault();
      if(searchTerm){
          fetch(SEARCH_API+searchTerm)
              .then((res)=>res.json())
              .then((data)=>{
                  setMovies(data.results)
              })
          setSearchTerm('')
      }
    }
    const hendleOnChange = (e)=>{
        setSearchTerm(e.target.value)
    }
  return (
      <>
          <header>
              <form onSubmit={hendleOnSubmit}>
                  <input className="seacrh" type="search" placeholder="Search..." value={searchTerm} onChange={hendleOnChange}/>
              </form>
          </header>
          <div className="movie-container">
              {movies.length > 0 && movies.map((movie)=><Movie key={movie.id} {...movie}/>)}
          </div>
      </>
  );
}

export default App;