import React from "react";

//komponent ktory nie ma pola state nalezy tworzyc jak poniezej

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};
