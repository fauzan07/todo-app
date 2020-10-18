import React, {useContext} from 'react';
import {NavLink , withRouter } from "react-router-dom";
// import $ from "jquery";
import fire from '../../config/Fire';
import { AuthContext } from '../../context/Auth';
import './Header.css';
import logo from './logo.jpg';

const Header=()=> {
  const { currentUser } = useContext(AuthContext);


  return (
  
      <>
        {currentUser ? (
            <nav className="navbar navbar-expand-lg bg-orange fixed-top">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand"><img src={logo} width="50" className="img-fluid" alt="Responsive"/><span className="logo-text">TODO</span></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/CreateBucket" activeClassName="selected"><i className="fa fa-book pr-2" aria-hidden="true"></i>Create Bucket</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>fire.auth().signOut()}><i className="fa fa-sign-out pr-2" aria-hidden="true"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            
            </div>
			
      </nav>
      ) : (
      <div></div>
       
      )}
      </>
  );



  
}


export default withRouter(Header);
