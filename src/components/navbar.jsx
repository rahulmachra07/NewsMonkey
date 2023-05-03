import React from "react";
import {a} from "react-router-dom";
import './navbar.css';
import { Link } from "react-router-dom";
import moment from "moment/moment";

function NavBar(){
    var m1=moment().format('dddd');
    var m2=moment().format('MMMM Do YYYY');
    return(
        <>
            <div className="box">
                <ul>
                    <div className="moment">
                        <h6 className="m1">{m1}</h6>
                        <h6 className="m2">{m2}</h6>
                    </div>
                    <li className="items"><Link to={"/"}>Home</Link></li>
                    <li className="items"><Link to={"/business"}>Business</Link></li>
                    <li className="items"><Link to={"/entertainment"}>Entertainment</Link></li>
                    <li className="items"><Link to={"/general"}>General</Link></li>
                    <li className="items"><Link to={"/health"}>Health</Link></li>
                    <li className="items"><Link to={"/science"}>Science</Link></li>
                    <li className="items"><Link to={"/sports"}>Sports</Link></li>
                    <li className="items"><Link to={"/technology"}>Technology</Link></li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;