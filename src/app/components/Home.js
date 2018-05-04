import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component{

    constructor(props){
        super();
        this.state = { //zmienne przyjete przez komponent w index.js
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        }
    }

    onMakeOlder(){
        //metoda ktora zmienia stan aplikacji i dzieki temu strona zostanie przeladowana
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink:  event.target.value
        });
    }

    render(){
        return (
          <div>
              <p>In a new Component</p>
              <p>your name is {this.props.name} your age is {this.state.age}</p>
              <p>Status: {this.state.status}</p>
              <button onClick={()=>this.onMakeOlder()} className="btn btn-primary">Make me older</button>
              <hr/>
              <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
              <hr/>
              <input type="text"
                     value={this.state.homeLink}
                     onChange={(event) => this.onHandleChange(event)}

              />
              <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
          </div>
        );
    }
}


//sprawdzanie czy w pliku index.js typ zmiennych podanych kompnentowi
//Home jest proprawny
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    changeLink: PropTypes.func,
    initialLinkName: PropTypes.string
};
