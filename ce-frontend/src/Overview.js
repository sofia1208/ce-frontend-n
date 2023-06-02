import logo from './logo.svg';
import './App.css';
import './search.css';

import * as bs from 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
function Overview()  {


  return (
    <div className="Overview">
    <h1 >S&P 500 Index</h1>
    <div class="overview">
      <h3>4136.26USD</h3>
      <div class="overview-small">
           <p >+75.03%</p>
       </div>
    </div>
    <div>
    <table>
      <tr>
        <th>Art</th>
        <th>Datum</th>
        <th>Volumen</th>
        <th>Kurs</th>
      </tr>
      <tr>
        <td>Kauf</td>
        <td>20:35</td>
        <td>35€</td>
        <td></td>
      </tr>
      <tr>
         <td>Kauf</td>
                <td>20:35</td>
                <td>35€</td>
                <td></td>
      </tr>
      <tr>
       <td>Kauf</td>
              <td>20:35</td>
              <td>35€</td>
              <td></td>
      </tr>
      <tr>
        <td>Verkauf</td>
               <td>20:35</td>
               <td>35€</td>
               <td></td>
      </tr>
      <tr>
        <td>Kauf</td>
               <td>20:35</td>
               <td>35€</td>
               <td></td>
      </tr>
      <tr>
        <td>Verkauf</td>
               <td>20:35</td>
               <td>35€</td>
               <td></td>
      </tr>
    </table>

    </div>


  </div>
  );
}


export default Overview;
