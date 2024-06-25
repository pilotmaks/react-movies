import React from "react"
import { Movies } from '../components/Movies'
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=ba33e429&s=matrix')
            .then(respose => respose.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    render() {
        const { movies } = this.state;
      
        return <main className="container content">
              <Search />
            {
                movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : <Preloader />
            }
        </main>

    }

}

export { Main };