import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';



const Button = styled.button`

font-family: sans-serif;
font-size: 1.3rem;
border: none;
border-radius: 5px;
padding: 7px 10px;
background: #591216;
color: black;
padding-top: 5px;
margin-top: 20px;

&:hover{
  background: #70324F;
  color: black;
}

`;

const Input = styled.input`

width: 25%;
padding-right: 30px;
padding: 7px 10px;
color: black;
`;


class MovieList extends Component {

    constructor(props){
        super(props)

        this.state = {

            search: " ",
            results: {}
        };
        
    }

    
   onSubmit = e => {
  
        e.preventDefault();

    axios.get(`http://www.omdbapi.com/?s=${this.state.search}=&apikey=8f73e7a1`) // returns a promise

        .then(res => {
            console.log(res);
            this.setState({...this.state, results: {...res}});
        });

       
    };
    onChange = (e) => {

        
    
        this.setState({ ...this.state, search: e.target.value});
        
    };
       
    
   


   

    render(){
               
        
       
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
                               <img src=""/>
                            </td>
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
                        
                        
                        style={{
                            fontSize:24,
                            display:  'block',
                            width: '25%',
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft:16
                        }} placeholder="Search movie here"/>
                        <Button >
                                Search
                        </Button>
                </form>
                

                <section className="section">
                    <ul>
                        
                    </ul>

                </section>

            </div>
        )
    }


}


export default MovieList;


