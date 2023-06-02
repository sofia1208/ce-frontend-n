

import './App.css';
import styles from './search.css';

import * as bs from 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import {Navigate, useNavigate} from "react-router-dom"
import Button from "react-bootstrap/Button";
import {FormControl, InputGroup} from "react-bootstrap";


function SearchSite() {
    const navigate = useNavigate()

  //let navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();

        // 👇️ redirect to /contacts
        navigate('/Overview');
    };
  return (
    <div className="SearchSite">
        <img src={require('./logo.png')} />
    <div   >

    <form className="divOben" onSubmit={handleSubmit}>
     <input   className="form-control search"
                 type="text"
                 id="header-search"
                 placeholder="Wertpapierkennnummer eingeben"
                 name="search"

             />


        <Button variant="primary">Suchen</Button>{' '}


    </form>
     </div>

    </div>


  );
}


export default SearchSite;
