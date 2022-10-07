import React, { useMemo } from "react";
import { connect } from "react-redux";

import Actions from "../../../../components/Actions";
import ActionsItem from "../../../../components/Actions/ActionsItem";
import Button from "../../../../components/Button";
import PokemonsPanel from "../../../../components/Pokemons/PokemonsPanel";
import { openModal } from "../../../../store/modal/actions";
import { getCurrentPokemonThunk } from "../../../../store/pokemon/thunks";
import { PokemonsItemType } from "../../../../store/pokemon/types";
import { getPokemonId } from "../../../../utils/pokemons";

interface IProps {
  pokemon: PokemonsItemType;
  openModal: () => void;
  getPokemon: (id: string) => any;
};

const mapDispatchToProps = {
  openModal,
  getPokemon: getCurrentPokemonThunk,
}

const PokemonsPanelContainer = ({ pokemon, openModal, getPokemon }: IProps) => {
  const id = useMemo(() => getPokemonId(pokemon.url), [pokemon.url]);

  const handleClick = () => {   
    openModal();
    getPokemon(id);
  };

  return (
    <PokemonsPanel>
      <span>{pokemon.name}</span>
      <Actions>
        <ActionsItem>
          <Button fill="primary" onClick={handleClick}>
            Info
          </Button>
        </ActionsItem>
      </Actions>
    </PokemonsPanel>
  )
};

export default connect(null, mapDispatchToProps)(PokemonsPanelContainer);
