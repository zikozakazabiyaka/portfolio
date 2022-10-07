import React from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router";

import Actions from "../../../../components/Actions";
import ActionsItem from "../../../../components/Actions/ActionsItem";
import Button from "../../../../components/Button";
import StarWarsPanel from "../../../../components/Pages/StarWars/StarWarsPanel";
import { setCurrentCreature } from "../../../../store/starWars/actions";
import { getCreatureId } from "../../../../utils/validation";

interface IProps {
  creature: {
    name: string;
    url: string;
  };
  setCreature: (creature: any) => void;
};

const mapDispatchToProps = {
  setCreature: setCurrentCreature,
}

const StarWarsPanelContainer = ({ creature, setCreature }: IProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const creatureId = getCreatureId(creature.url);
  const handleClick = () => {
    navigate(`${pathname}/${creatureId}`);
    setCreature(creature);
  }

  return (
    <StarWarsPanel>
      <span>{creature.name}</span>
      <Actions>
        <ActionsItem>
          <Button fill="primary" onClick={handleClick}>
            Details
          </Button>
        </ActionsItem>
      </Actions>
    </StarWarsPanel>
  )
};

export default connect(null, mapDispatchToProps)(StarWarsPanelContainer);
