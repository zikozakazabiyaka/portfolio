import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import Actions from "../../../../components/Actions";
import ActionsItem from "../../../../components/Actions/ActionsItem";
import ActionWrapper from "../../../../components/Actions/ActionWrapper";
import Button from "../../../../components/Button";
import Container from "../../../../components/Layout/Container";
import Loader from "../../../../components/Loader";
import StarWars from "../../../../components/Pages/StarWars";
import DetailsContent from "../../../../components/Pages/StarWars/DetailsContent";
import DetailsList from "../../../../components/Pages/StarWars/StarWarsDetailsList";
import DetailsListItem from "../../../../components/Pages/StarWars/DetailsListItem";
import { PageTitle } from "../../../../components/PageTitle";
import { RootState } from "../../../../store";
import { API_CREATURE_DETAILS_PAGE_URL } from "../../../../store/starWars/api";
import { currentCreatureSelector, loadingSelector, peopleCountSelector } from "../../../../store/starWars/selectors";
import { getCreaturePlanetThunk, getCreatureThunk } from "../../../../store/starWars/thunks";
import { CurrentCreatureType } from "../../../../store/starWars/types";
import { clearCreatureDetails } from "../../../../store/starWars/actions";

interface IProps {
  getCurrentCreature: (path: string) => any;
  getCreaturePlanet: (path: string) => any;
  currentCreature: CurrentCreatureType;
  clearCreature: () => void;
  isLoading: boolean;
  isPlanetLoading: boolean,
  peopleCount: number,
};

const mapStateToProps = (state: RootState) => ({
  currentCreature: currentCreatureSelector(state),
  isLoading: loadingSelector(state),
  isPlanetLoading: currentCreatureSelector(state).isPlanetLoading,
  peopleCount: peopleCountSelector(state),
});

const mapDispatchToProps = {
  getCurrentCreature: getCreatureThunk,
  getCreaturePlanet: getCreaturePlanetThunk,
  clearCreature: clearCreatureDetails,
};

const StarWarsDetailsContainer = ({
  currentCreature,
  clearCreature,
  getCurrentCreature,
  getCreaturePlanet,
  isLoading,
  isPlanetLoading,
  peopleCount,
}: IProps) => {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { creatureId } = useParams();
  const currentCreaturePage = `${API_CREATURE_DETAILS_PAGE_URL}${creatureId}`;
  const currentCreatureHomeWorld = currentCreature.homeworld;

  useEffect(() => {    
    getCurrentCreature(currentCreaturePage);
  }, [getCurrentCreature, currentCreaturePage]);

  useEffect(() => {
    if (currentCreatureHomeWorld) {
      getCreaturePlanet(currentCreatureHomeWorld);
    }
  }, [getCreaturePlanet, currentCreatureHomeWorld]);

  useEffect(() => {
    if (creatureId && (!/^[0-9]+$/.test(creatureId) || (peopleCount && (+creatureId < 0 || +creatureId > peopleCount + 1)))) {
      throw new Error('Creature not found');
    };
  }, [pathname, creatureId, peopleCount]);

  const handleClick = () => {
    navigate(pathname.slice(0, pathname.lastIndexOf('/')));
    clearCreature();
  };

  return (
    <>
      <PageTitle>Star Wars</PageTitle>
      <StarWars>
        <Container>
          {isLoading
            ? (
              <Loader text="Loading..." />
            ) : (
              <DetailsContent>
                <h1>{currentCreature.name}</h1>
                <DetailsList>
                  <DetailsListItem>Height: {currentCreature.height}</DetailsListItem>
                  <DetailsListItem>Mass: {currentCreature.mass}</DetailsListItem>
                  <DetailsListItem>Gender: {currentCreature.gender}</DetailsListItem>
                  <DetailsListItem>
                    Planet: {isPlanetLoading ? <Loader size="sm" /> : currentCreature.planet}
                  </DetailsListItem>
                </DetailsList>
                <ActionWrapper>
                  <Actions>
                    <ActionsItem width="md">
                      <Button fill="primary" onClick={handleClick}>Back</Button>
                    </ActionsItem>
                  </Actions>
                </ActionWrapper>           
              </DetailsContent>
            )
          }
        </Container>
      </StarWars>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsDetailsContainer);
