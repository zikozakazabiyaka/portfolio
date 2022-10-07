import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import './index.scss';
import App from './App';
import { store } from './store';
import PokemonsInfoModal from './containers/Pages/Pokemons/PokemonsInfoModal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <>
      <App />
      <PokemonsInfoModal />
    </>
  </Provider>
);