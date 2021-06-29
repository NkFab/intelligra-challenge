import React from 'react';

const Card: React.FunctionComponent<{}> = ():React.ReactElement => (
  <div>
    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
      <img className="uk-width-1-1" src="https://source.unsplash.com/200x200/?phone" alt="" />
      <h3 className="uk-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>

);

export default Card;
