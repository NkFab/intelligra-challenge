import React from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '../assets/images/notFound.svg';

const Four0Four: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  return (
    <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
      <div className=" uk-flex uk-flex-column">
        <img src={NotFound} width="300" height="300" alt="not found" />
        <button className="uk-button uk-button-primary uk-margin-top" type="button" onClick={() => history.goBack()}>Go Back</button>
      </div>

    </div>
  );
};

export default Four0Four;
