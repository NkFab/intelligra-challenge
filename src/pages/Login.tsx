import React from 'react';
import {
  Link, useHistory,
} from 'react-router-dom';
import Alert from '../components/Alert';

const Login: React.FunctionComponent<{}> = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const history = useHistory();

  const login = () => {
    if (username === 'Admin' && password === '123456') return history.push('/device-store');
    return setShowError(true);
  };

  return (
    <>
      <Alert type="danger" message="Username or password is incorrect" show={showError} />

      <div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport" data-uk-height-viewport>

        <div className="uk-position-bottom-center uk-position-small uk-visible@m uk-position-z-index">
          <span className="uk-text-small uk-text-muted">
            © 2021 Intelligra - All rights reserved
          </span>
        </div>
        <div className="uk-width-medium uk-padding-small">
          <form className="toggle-class">
            <fieldset className="uk-fieldset">
              <div className="uk-margin-small">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon uk-form-icon-flip"
                    data-uk-icon="icon: user"
                  />
                  <input
                    className="uk-input uk-border-pill"
                    required
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="uk-margin-small">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon uk-form-icon-flip"
                    data-uk-icon="icon: lock"
                  />
                  <input
                    className="uk-input uk-border-pill"
                    required
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="uk-margin-small">
                <label htmlFor="keep me">
                  <input name="keep me" className="uk-checkbox" type="checkbox" />
                  {' '}
                  Keep me logged in
                </label>
              </div>
              <div className="uk-margin-bottom">
                <button
                  type="button"
                  className="uk-button uk-button-primary uk-border-pill uk-width-1-1"
                  onClick={login}
                >
                  LOG IN
                </button>
              </div>
            </fieldset>
          </form>
          <form className="toggle-class" hidden>
            <div className="uk-margin-small">
              <div className="uk-inline uk-width-1-1">
                <span
                  className="uk-form-icon uk-form-icon-flip"
                  data-uk-icon="icon: mail"
                />
                <input
                  className="uk-input uk-border-pill"
                  placeholder="E-mail"
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="uk-margin-bottom">
              <button
                type="submit"
                className="uk-button uk-button-primary uk-border-pill uk-width-1-1"
              >
                SEND PASSWORD
              </button>
            </div>
          </form>

          <>
            <div className="uk-text-center">
              <Link
                to="/#"
                className="uk-link-reset uk-text-small toggle-class"
                data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade"
              >
                Forgot your password?
              </Link>
              <Link
                to="/#"
                className="uk-link-reset uk-text-small toggle-class"
                data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade"
                hidden
              >
                <span data-uk-icon="arrow-left" />
                Back to Login
              </Link>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Login;
