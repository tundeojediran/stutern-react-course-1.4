import React from 'react';
import ReactDOM from 'react-dom/client';
import FilteredListApp from './components/FilteredListApp';
import ListApp from './components/ListApp';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListApp />
    <FilteredListApp />
  </React.StrictMode>
);
