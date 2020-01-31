// MOVIELIST - uppercase
// movieList - camelCase
// movie_list - snake_case
// MovieList - PascalCase

import React from 'react';



function _handleMouseOver() {
    console.log('ouch');
}

// const movies = [
//     'The Goonies',
//     'E.T.',
//     'Gleaming the Cube'
// ]

//"MovieList is a React Component"
class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [
                'The Goonies',
                'E.T.',
                'Gleaming the Cube'
            ]
        };
    }

    render() {
        return (
            <ul>
                {
                  this.state.movies.map((movie, i) => (
                    <li onClick={(event) => {
                        this._handleClick(i)
                    }}>{movie}</li>
                  ))
                }
            </ul>
        )   
    }

    // "_handleClick is an arrow function"
    // "and it is part of this class"
    _handleClick = (jeff) => {
        
        const newMovies = [
            ...this.state.movies
        ];
        newMovies[jeff] += '!';

        this.setState({
            movies: newMovies
        });
    }    
}


export default MovieList;



// In case you need to export more than one thing:
// function MoviePosterGetterThing() {
// }
// export MoviePosterGetterThing;