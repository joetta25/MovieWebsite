import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SaveMovies from './SavedMovies'



const Button = styled.button`

font-family: sans-serif;
font-size: 1.3rem;
border: none;
border-radius: 5px;
padding: 3px 5px;
background: #591216;
color: black;
padding-top: 6px;


&:hover{
  background: #70324F;
  color: black;
}

`;

const Input = styled.input`
margin-top: 50px;
margin-right: 5px;
width: 25%;
padding-right: 10px;
padding-top: 12px;
color: black;
`;


class MovieList extends Component {

    constructor(props){
        super(props)

        this.state = {

            isloading: true,
            search: " ",
            results: [],
            error: null
        };
        
    }

    
   onSubmit = e => {
  
        e.preventDefault();

    axios.get(`http://www.omdbapi.com/?s=${this.state.search}=&apikey=8f73e7a1`) // returns a promise

    .then(response =>

            response.data.Search.map(movie => ({
              Title:  `${movie.Title}`,
              Year: `${movie.Year}`,
              imdbID: `${movie.Type}`,
              Poster: `${movie.Poster}`
            }))

            
      )
        .then(results => {
            console.log(results);
            this.setState({
                results,
                isloading:false
            });
        })
         .catch((error) => this.setState({error,isloading: false}));
        

        
       
    };
    onChange = (e) => {

        
    
        this.setState({ ...this.state, search: e.target.value});
        
    };
    

   

    render(){
               
        const{ isLoading,results} = this.state;
       
        return(

            <div>
                
                <table style={{
                    backgroundColor: '#000',
                    display: 'block',
                    color: '#fff',
                   
                }}>
                    <tbody>
                        <tr>
                            <td>
                                <h1>MovieDB Search</h1>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>

                
                <form className="form" id="addItemForm" onSubmit={this.onSubmit}>
                        <Input 
                        type="text"
                        className="input"
                        id="addInput"
                        onChange={this.onChange}
                        placeholder="Search movie here"/>
                        <Button >
                                Search
                        </Button>
                </form>
                
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={SaveMovies}>Watch Later List</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Router>

                <section className="section">
                    <h1>Random User</h1>
                      
                    <ul>
                    
                        {!isLoading ? (
                        
                        results.map(function(result,index) {
                            const  { addMovie, deleteMovie};
                            const { Title, Year, imdbID, Poster } = result;
                            return (
                            <div key={index}>
                               <div>
                                    <p>{Title}</p>
                                    <div>
                                    <img src={Poster} alt={Title} />
                                    </div>
                                    <p>{Year}</p>
                                    <p>{imdbID}</p>
                                    
                                    <hr />
                               </div>
                            </div>
                            );
                        })
                        ) : (
                        <p>Loading...</p>
                        )}
                    </ul>

                </section>

            </div>
        )
    }


}


export default MovieList;


