import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component{

    constructor(props){
        super();
        this.state = { //zmienne przyjete przez komponent w index.js
            age: props.initialAge,
            status: 0
        }
    }

    onMakeOlder(){
        //metoda ktora zmienia stan aplikacji i dzieki temu strona zostanie przeladowana
        this.setState({
            age: this.state.age + 3
        });
    }


    render(){
        return (
          <div>
              <p>In a new Component</p>
              <p>your name is {this.props.name} your age is {this.state.age}</p>
              <p>Status: {this.state.status}</p>
              <button onClick={()=>this.onMakeOlder()} className="btn btn-primary">Make me older</button>
          </div>
        );
    }
}


//sprawdzanie czy w pliku index.js typ zmiennych podanych kompnentowi
//Home jest proprawny
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};
