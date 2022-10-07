import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import ContentList from "../../../components/ContentList";
import ContentListItem from "../../../components/ContentList/ContentListItem";
import Container from "../../../components/Layout/Container";
import Loader from "../../../components/Loader";
import { PageTitle } from "../../../components/PageTitle";
import Pokemons from "../../../components/Pokemons";
import PokemonsContent from "../../../components/Pokemons/PokemonsContent";
import { RootState } from "../../../store";
import { LIMIT } from "../../../store/pokemon/api";
import { countSelector, isLoadingSelector, pokemonsSelector } from "../../../store/pokemon/selectors";
import { getPokemonsThunk } from "../../../store/pokemon/thunks";
import { PokemonsType } from "../../../store/pokemon/types";
import PaginationContainer from "../../PaginationContainer";
import PokemonsPanelContainer from "./PokemonsPanelContainer";

interface IProps extends PokemonsType {
  getPokemons: (page: number) => any;
  isLoading: boolean;
  count: number;
};

const mapStateToProps = (state: RootState) => ({
  pokemons: pokemonsSelector(state),
  isLoading: isLoadingSelector(state),
  count: countSelector(state),
});

const mapDispatchToProps = {
  getPokemons: getPokemonsThunk,
};

const PokemonsContainer = ({ getPokemons, pokemons, isLoading, count }: IProps) => {
  const { pageNumber }: any = useParams();
  const pagesCount = Math.ceil(count / LIMIT);

  useEffect(() => {
    if (pageNumber && count && (!/^[0-9]+$/.test(pageNumber) || +pageNumber > pagesCount)) {
      throw new Error('Pokemons not found');
    };
  }, [pageNumber, count, pagesCount]);

  useEffect(() => {
    getPokemons(+pageNumber);
  }, [getPokemons, pageNumber]);
  
  return (
    <>
    <PageTitle>Pokemons</PageTitle>
    <Pokemons>
      <h1>Pokemons</h1>
      <Container>
        <PokemonsContent>
          {isLoading ? (
              <Loader text="Loading..." />
            ) : (
            <>
              <ContentList>
                {pokemons.map(item => (
                  <ContentListItem key={item.name}>
                    <PokemonsPanelContainer pokemon={item} />
                  </ContentListItem>
                ))}
              </ContentList>
              <PaginationContainer />
            </>
          )}
        </PokemonsContent>
      </Container>
    </Pokemons>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
