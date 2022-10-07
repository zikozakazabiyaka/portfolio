import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { connect } from "react-redux";
import Button from "../../../components/Button";
import Actions from "../../../components/Actions";
import ActionsItem from "../../../components/Actions/ActionsItem";
import Container from "../../../components/Layout/Container";
import StarWars from "../../../components/Pages/StarWars";
import StarWarsContent from "../../../components/Pages/StarWars/StarWarsContent";
import { PageTitle } from "../../../components/PageTitle";
import { RootState } from "../../../store";
import { loadingSelector, nextPageSelector, peopleSelector, prevPageSelector } from "../../../store/starWars/selectors";
import getPeopleThunk from "../../../store/starWars/thunks";
import { StarWarsItemType, StarWarsType } from "../../../store/starWars/types";
import StarWarsPanelContainer from "./StarWarsPanelContainer";
import StarWarsPagination from "../../../components/Pages/StarWars/StarWarsPagination";
import { API_PAGE_URL } from "../../../store/starWars/api";
import Loader from "../../../components/Loader";
import ContentList from "../../../components/ContentList";
import ContentListItem from "../../../components/ContentList/ContentListItem";

interface IProps extends StarWarsType {
  getPeople: (path: string) => any;
}

const mapStateToProps = (state: RootState) => ({
  isLoading: loadingSelector(state),
  people: peopleSelector(state),
  previous: prevPageSelector(state),
  next: nextPageSelector(state),
})

const mapDispatchToProps = {
  getPeople: getPeopleThunk,
}

const StarWarsContainer = ({
  getPeople,
  isLoading,
  people,
  previous,
  next,
}: IProps) => {
  const { pageNumber }: any = useParams();

  const firstPage = API_PAGE_URL + pageNumber;
  const prevPage = `/star-wars/${pageNumber - 1}`;
  const nextPage = `/star-wars/${+pageNumber + 1}`;

  const navigate = useNavigate();
  
  useEffect(() => {
    getPeople(firstPage);
  }, [getPeople, firstPage]);
  
  const handlePrevious = () => {
    previous && getPeople(previous);
    navigate(prevPage);
  };

  const handleNext = () => {
    next && getPeople(next);
    navigate(nextPage);
  };

  return (
    <>
      <PageTitle>Star Wars</PageTitle>
      <StarWars>
        <h1>Star Wars</h1>
        <Container>
          {isLoading
            ? (
              <Loader text="Loading..." />
            ) : (
              <StarWarsContent>
                <ContentList>
                  {people.map((creature: StarWarsItemType) => (
                    <ContentListItem key={creature.name}>
                      <StarWarsPanelContainer 
                        creature={creature}
                      />
                    </ContentListItem>
                  ))}
                </ContentList>
                <StarWarsPagination>
                  <Actions>
                    {previous && (
                      <ActionsItem width="md">
                        <Button fill="primary" onClick={handlePrevious}>
                          Previous
                        </Button>
                      </ActionsItem>
                    )}
                    {next && (
                      <ActionsItem width="md">
                        <Button fill="primary" onClick={handleNext}>
                          Next
                        </Button>
                      </ActionsItem>
                    )}
                  </Actions>
                </StarWarsPagination>
              </StarWarsContent>
            )
          }
        </Container>
      </StarWars>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsContainer);
