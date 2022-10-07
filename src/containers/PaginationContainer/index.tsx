import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Actions from "../../components/Actions";
import ActionsItem from "../../components/Actions/ActionsItem";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import { RootState } from "../../store";
import { LIMIT } from "../../store/pokemon/api";
import { countSelector, nextPageSelector, previousPageSelector } from "../../store/pokemon/selectors";
import { getPokemonsThunk } from "../../store/pokemon/thunks";
import { getInitialList, getPaginationList } from "../../utils/pagination";

interface IProps {
  count: number,
  previous: string | null,
  next: string | null,
  getPokemons: (page: number) => any,
}

const mapStateToProps = (state: RootState) => ({
  count: countSelector(state),
  previous: previousPageSelector(state),
  next: nextPageSelector(state),
});

const mapDispatchToProps = {
  getPokemons: getPokemonsThunk,
};

const PaginationContainer = ({ count, previous, next, getPokemons }: IProps) => {
  const [isActive, setIsActive] = useState(0);
  const [currentList, seCurrentList] = useState(getInitialList(5));
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const page = pageNumber !== undefined ? +pageNumber : -1;
  const pagesCount = Math.ceil(count / LIMIT);

  useEffect(() => {
    setIsActive(page - 1);
    seCurrentList(getPaginationList({ isActive, list: currentList, pagesCount }));
  // eslint-disable-next-line
  }, [page, isActive]);

  const handleClick = (index: number) => () => {
    getPokemons(index);
    navigate(`/pokemons/${index + 1}`);
  };

  const handleNext = () => {
    if (isActive < currentList[currentList.length - 1]) {
      navigate(`/pokemons/${page + 1}`);
    }
  };

  const HandlePrevious = () => {
    if (isActive > currentList[0]) {
      navigate(`/pokemons/${page - 1}`);
    }
  };

  return (
    <Pagination>
      <Actions>
        <ActionsItem widthAuto>
          <Button
            disabled={!previous}
            fill='primary'
            shape='square'
            onClick={HandlePrevious}
          >
            {`<`}
          </Button>
        </ActionsItem>
        {currentList.map((item, index) => (
          <ActionsItem widthAuto key={item}>
            <Button
              isActive={isActive === item}
              fill='primary'
              shape='square'
              onClick={handleClick(item)}
            >
              {String(item + 1)}
            </Button>
          </ActionsItem>
        ))}
        <ActionsItem widthAuto>
          <Button
            disabled={!next}
            fill='primary'
            shape='square'
            onClick={handleNext}
          >
            {`>`}
          </Button>
        </ActionsItem>
      </Actions>
    </Pagination>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
