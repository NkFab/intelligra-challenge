import React from 'react';

type Props = {
  message: string;
  show: boolean;
  type: 'success'|'danger'|'warning'|'info'
};

const Alert: React.FunctionComponent<Props> = ({
  message,
  show = false,
  type,
}: Props): React.ReactElement => {
  let alertType = '';
  const [showAlert, setShowAlert] = React.useState(show);

  setTimeout(() => setShowAlert(false), 1500);
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
      {showAlert && (
      <div
        className={`${alertType} uk`}
        style={{
          position: 'absolute',
          zIndex: 1000,
          padding: '0.9em 0.7em 0 0.7em',
          border: '1px solid #F0506E',
        }}
        uk-alert
      >
        <p>
          {/* <span className="uk-margin-small-right" uk-icon="icon: warning" /> */}
          {message}
        </p>
      </div>
      )}
    </>
  );
};

export default Alert;
