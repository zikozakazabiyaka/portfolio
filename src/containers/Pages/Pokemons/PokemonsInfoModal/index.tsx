import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import Modal from "../../../../components/Modal";
import ModalPortal from "../../../../portals/ModalPortal";
import { RootState } from "../../../../store";
import { closeModal } from "../../../../store/modal/actions";
import { isOpenModalSelector } from "../../../../store/modal/selectors";
import { currentPokemonSelector, isPokemonLoadingSelector } from "../../../../store/pokemon/selectors";
import { POKEMON_TYPES } from "../../../../constants/pokemonTypes";
import { CurrentPokemonType } from "../../../../store/pokemon/types";
import Loader from "../../../../components/Loader";
import { clearCurrentPokemon } from "../../../../store/pokemon/actions";
import ModalContentInfo from "../../../../components/Modal/ModalContentInfo";
import ModalContentList from "../../../../components/Modal/ModalContentList";
import ModalContentListItem from "../../../../components/Modal/ModalContentListItem";
import { POKEMON_STATS } from "../../../../constants/pokemonStats";
import ModalContentListImage from "../../../../components/Modal/ModalContentLIstImage";
import ModalContentTitle from "../../../../components/Modal/ModalContentTitle";

interface IProps {
  isOpen?: boolean;
  closeModal: () => void;
  currentPokemon: CurrentPokemonType;
  isLoading: boolean;
  clearCurrentPokemon: () => void;
}

const mapStateToProps = (state: RootState) => ({
  isOpen: isOpenModalSelector(state),
  currentPokemon: currentPokemonSelector(state),
  isLoading: isPokemonLoadingSelector(state),
});

const mapDispatchToProps = {
  clearCurrentPokemon,
  closeModal,
};

const PokemonsModalInfo = ({
  isOpen,
  closeModal,
  currentPokemon,
  isLoading,
  clearCurrentPokemon
}: IProps) => {
  const { name, power, icon, height, weight, types, stats } = currentPokemon;
  const {stat, baseStats} = stats;

  const handleClick = () => {
    clearCurrentPokemon();
    closeModal();
  };
  return isOpen
    ? (
      <ModalPortal>
        <Modal onClose={handleClick}>
          {
            isLoading ? (
              <Loader text="Loading..." />
            ) : (
              <>
                <div className="modal__content-image">
                  <img src={icon} alt={name} height="400" width="400" loading="eager" />
                </div>
                <ModalContentInfo>
                  <ModalContentTitle>
                    <h2>{name}</h2>
                  </ModalContentTitle>
                  <ModalContentList direction="row" gap="xxs">
                    {types.map(type => (
                      <ModalContentListItem key={uuidv4()} display="flex" direction="column">
                        <ModalContentListImage>
                          <img src={POKEMON_TYPES[type]} alt={`type ${type}`} />
                        </ModalContentListImage>
                        <span>{type}</span>
                      </ModalContentListItem>
                    ))}
                  </ModalContentList>
                  <ModalContentTitle align="left">
                    <h3>Params:</h3>
                  </ModalContentTitle>
                  <ModalContentList fullWidth>
                    <ModalContentListItem>
                      <><b> Height</b> : {+height / 10} m</>
                    </ModalContentListItem>
                    <ModalContentListItem>
                      <><b> Weight</b> : {+weight / 10} kg</>
                    </ModalContentListItem>
                    <ModalContentListItem>
                      <><b> Power</b> : {+power / 10} 💪</>
                    </ModalContentListItem>
                  </ModalContentList>
                  <ModalContentTitle align="left">
                    <h3>Stats:</h3>
                  </ModalContentTitle>
                  <ModalContentList fullWidth wrap="wrap" direction="row">
                    <>
                      {stat.map((item, i) => (
                        <ModalContentListItem key={uuidv4()} display="flex" width="50">
                          <><b> {item}</b> : {baseStats[i]}</>
                          <ModalContentListImage size="20">
                            <img src={POKEMON_STATS[item]} alt={`stat ${item}`} />
                          </ModalContentListImage>
                        </ModalContentListItem>
                      ))}
                    </>
                  </ModalContentList>
                </ModalContentInfo>
              </>
            )
          }
        </Modal>
      </ModalPortal>
    ) : null
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsModalInfo);

