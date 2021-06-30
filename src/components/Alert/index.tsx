import React from 'react';
import './styles.css';

type Props = {
  message: string;
  show: boolean;
  type: 'success'|'danger'|'warning'|'info'
};

const Alert: React.FunctionComponent<Props> = ({
  message,
  show,
  type,
}: Props): React.ReactElement => {
  let alertType = '';

  switch (type) {
    case 'success':
      alertType = 'uk-alert-success';
      break;
    case 'danger':
      alertType = 'uk-alert-danger';
      break;
    case 'warning':
      alertType = 'uk-alert-warning';
      break;
    case 'info':
      alertType = 'uk-alert-primary';
      break;
    default: alertType = '';
  }

  return (
    <>
      {show && (
      <div className={`${alertType} alert`} data-uk-alert>
        <span className="uk-alert-close" data-uk-close />
        <p>{message}</p>
      </div>
      )}
    </>
  );
};

export default Alert;
