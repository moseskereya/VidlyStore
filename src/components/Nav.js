import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
               <nav>
                    <div className="title">
                        Vidly
                    </div>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/movies">
                            <li>Movies</li>
                        </Link>
                    </ul>
               </nav>
            </div>
         );
    }
}
 
export default Nav;