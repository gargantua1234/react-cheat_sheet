import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{
    render(){
        return(
            <div>
                <h1>First Component Added</h1>
            </div>
        );
    }
}

const app = document.getElementById("app");
ReactDOM.render(<App/>, app);