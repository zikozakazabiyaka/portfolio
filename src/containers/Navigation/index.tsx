import React from "react";
import { useLocation } from "react-router";

import Navigation from "../../components/Navigation";
import NavigationList from "../../components/Navigation/NavigationList";
import NavigationListItem from "../../components/Navigation/NavigationListItem";
import NavigationLink from "../../components/Navigation/NavigationLink";

const LINKS = [
  {
    path: '/',
    name: 'Summary',
    page: '',
  },
  {
    path: '/todo-list',
    name: 'Todo list',
    page: 'todo-list',
  },
  {
    path: '/login-form',
    name: 'Login form',
    page: 'login-form',
  },
  {
    path: '/star-wars/1',
    name: 'Star wars',
    page: 'star-wars',
  },
  {
    path: '/pokemons/1',
    name: 'Pokemons',
    page: 'pokemons',
  },
]

const NavigationContainer = () => {
  const { pathname } = useLocation();

  return (
    <Navigation>
      <NavigationList>
        {LINKS.map(item => (
          <NavigationListItem key={item.name}>
            <NavigationLink to={item.path} isActive={pathname.split('/')[1] === item.page}>
              {item.name}
            </NavigationLink>
          </NavigationListItem>
        ))}
      </NavigationList>
    </Navigation>
  );
};

export default NavigationContainer;
