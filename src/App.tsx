import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-large-top">
      <div className="uk-section-muted uk-section-small">
        <div className="uk-container">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label">E-mail</label>
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon:mail"></span>
                <input type="email" className="uk-input" />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Password</label>
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon:lock"></span>
                <input type="password" className="uk-input" />
              </div>
            </div>
            <div>
              <button className="uk-button-primary uk-button-small uk-width-1-1">
                Sign-in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
