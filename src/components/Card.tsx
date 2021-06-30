import React from 'react';

type Props = {
  photo: string,
  title: string,
  description: string,
  sn: number,
  timeAdded: string
}

const Card: React.FunctionComponent<Props> = ({
  photo, title, description, timeAdded, sn,
}: Props):React.ReactElement => (

  <div className="uk-card uk-card-default uk-card-hover uk-card-body">
    <img className="uk-width-1-1" src={photo} alt="" />
    <h3 className="uk-card-title">{title}</h3>
    <h5>{sn}</h5>
    <p className="uk-card-body">{description}</p>

    <div className="uk-card-footer uk-flex uk-flex-between">
      <a href="/#" className="uk-button uk-button-text">Read more</a>
      <small>{timeAdded}</small>
    </div>
  </div>

);

export default Card;
