import logo from './logo.svg';
import './App.css';
import * as React from "react";
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import SearchSite from './SearchSite';
import Overview from './Overview';
import {Link, Route, Routes, useRoutes} from "react-router-dom";
function App() {

  let element = useRoutes([
          {
              path: '/',
              element: <SearchSite />

          },
          {
              path: '/Search',
              element: <SearchSite />

          },
          {
              path: '/Overview',
              element: <Overview />

          }
  ]
  );
  return (

      <div>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Zurück</Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/Overview" element={<Overview />} />
                  <Route path="/" element={<SearchSite />} />
              </Routes>
          </div>
      </div>

  );
}

export default App;
