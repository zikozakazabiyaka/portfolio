import React from "react";

import Button from "../Button";

import './styles.scss';
import Actions from "../Actions";
import ActionsItem from "../Actions/ActionsItem";
import { useRedirect } from "../../hooks/useRedirect";

interface IProps {
  title: string;
  image: string;
};

const ErrorPage = ({ title, image }: IProps) => {
  const redirect = useRedirect('/');
  const handleClick = () => {
    redirect();
    document.location.reload();
  };
  
  return (
    <div className="error-page">
      <div className="error-page__image">
        <img src={image} alt={title}/>  
      </div>
      <div className="error-page__title">
        <h2>{title}</h2>
      </div>
      <Actions>
        <ActionsItem width="md">
          <Button fill="primary" onClick={handleClick}>Home</Button>
        </ActionsItem>
      </Actions>
    </div>
  );
};

export default ErrorPage;
