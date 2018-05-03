import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component{
    render(){
        let text = "something";
        return (
          <div>
              <p>In a new Component</p>
              <p>{text}</p>
              <p>your name is {this.props.name} your age is {this.props.age}</p>
              <p>User Object => Name: {this.props.user.name}</p>
              <div>
                  <h4>Hobbies</h4>
                  <ul>
                      {this.props.user.hobbies.map((hobby, i) =>
                        <li key={i}>{hobby}</li>
                      )}
                  </ul>
              </div>
              <hr/>
              {/*odwolanie sie elementu zagniezdzonego*/}
              {this.props.children}
          </div>
        );
    }
}


//sprawdzanie czy w pliku index.js typ zmiennych podanych kompnentowi
//Home jest proprawny
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user:PropTypes.object,
    children: PropTypes.element.isRequired
};
