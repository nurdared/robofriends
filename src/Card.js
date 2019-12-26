import React, { Fragment } from "react";
import "./Card.css";

const Card = ({id, name, email}) => {
    
    return (
    <Fragment>
      <div className="card">
        <div className="card__avatar">
          <img
            src={`https://robohash.org/${id}?size=200x200`}
            alt="avatar"
          />
        </div>
        <div className="card__name">
          <h1>{name}</h1>
        </div>
        <div className="card__email">
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
