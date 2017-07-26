import React , { Component } from 'react';
//const Component = React.Component;
import ReactDOM from 'react-dom';



class SearchBar extends React.Component{

  constructor(props){ //this function gets called all the time.

        super(props); // we call the parent method on the parent class Component by calling super

        this.state = { term : ''}; //whenever the user updates the search, term will record that change and the empty string will be the value of the input
          //this.state is only in constructor
  }



  render() {
    return (
      <div className="search-bar">
        <input
               value= {this.state.term}
               onChange={ event => this.onInputChange(event.target.value)} />

      </div>
    );
  //we manipulate state with this.setState. Hey the state is changing and here is what it is


  //return <input onChange={ event => console.log(event.target.value)} />  //name of event -- "onChange" is a REACT DEFINED PROPERTY
    //return <input onChange={ this.onInputChange } />  //name of event -- onChange; REACT DEFINED PROPERTY
  }

//   onInputChange(event) {   //usually its handle or on in the React Community when naming
//     console.log(event.target.value);
//   }


  onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
  }



 }


//To communicate with other components we're creating; we make it a CLASS based component
//whenever we create a class component we must always have a render method ; render() {}


//class with name SearchBar,
//extends React.Component    define a new class called searchBar and give it access to all the functionality that React.Compnent has


export default SearchBar;





// handling events have 2 steps; First declare Event Handler, 2ns pass event handler to the element we want to monitor for events
