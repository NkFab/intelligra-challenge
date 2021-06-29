import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

type Props = {
  children: object;
  location: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  location,
}: Props): React.ReactElement => (
  <>
    <div
      uk-sticky
      className="uk-navbar-container tm-navbar-container uk-active uk-light"
    >
      <div className="uk-container uk-container-expand">
        <div className="uk-offcanvas-content">
          <nav
            id="navbar"
            className="uk-navbar-container"
            uk-navbar="mode: click"
            uk-sticky="animation: uk-animation-slide-top; show-on-up: true"
          >
            <div className="uk-navbar-left nav-overlay">
              <a href="/#" className="uk-navbar-item uk-logo uk-margin-left">
                Intelligra
              </a>
            </div>
            <div className="uk-navbar-right nav-overlay">
              <div className="uk-navbar-flip">
                <ul className="uk-navbar-nav uk-visible@s">
                  <li>
                    <Link to="/">LOGOUT</Link>
                  </li>
                  <li>
                    <span className="uk-navbar-toggle" />
                  </li>
                </ul>
                <ul className="uk-navbar-nav uk-hidden@s">
                  <li>
                    {' '}
                    <span
                      className="uk-navbar-toggle uk-margin-right"
                      uk-navbar-toggle-icon
                      uk-toggle="target: #mobile-navbar"
                      uk-icon="icon: menu"
                      style={{ cursor: 'pointer' }}
                    >
                      &nbsp;
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div id="mobile-navbar" uk-offcanvas="mode: slide; flip:false">
            <div className="uk-offcanvas-bar uk-background-primary">
              <span
                className="uk-offcanvas-close"
                uk-icon="icon: close"
                uk-close
                style={{ cursor: 'pointer' }}
              >
                &nbsp;
              </span>
              <ul className="uk-nav-default uk-nav-parent-icon uk-list" uk-nav>
                <li>
                  <h3>Intelligra</h3>
                </li>
                <li>
                  <hr className="uk-divider" />
                </li>
                <div
                  className="uk-flex uk-flex-center uk-align-center uk-text-center"
                  style={{ alignItems: 'center' }}
                >
                  <div className="user">
                    <img
                      id="avatar"
                      width="120"
                      className="uk-border-circle"
                      src="https://image.flaticon.com/icons/svg/167/167750.svg"
                      alt=""
                    />
                    <h4 className="uk-text-truncate">Nkaka Manzi</h4>
                    <h6 className="uk-text-truncate">Agent</h6>
                    <div id="email" className="uk-text-truncate">
                      fab@gmail.com
                    </div>
                    <span
                      id="status"
                      className="uk-margin-top uk-label uk-label-success"
                    >
                      Online
                    </span>
                  </div>
                  <br />
                </div>
                <hr className="uk-divider-icon" />
                {/* <ul className="uk-nav uk-nav-default"> */}

                <li className="uk-nav-header">devices</li>
                <li>
                  <Link to="buttons.html">Store</Link>
                </li>

                <li className="uk-nav-header">users</li>
                <li>
                  <Link to="login.html">Details</Link>
                </li>
                <li>
                  <Link to="register.html">Financing</Link>
                </li>
                {/* </ul> */}
                <li>
                  <a href="#home">LOGOUT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar" className="tm-sidebar-left uk-background-default">
      <div
        className="uk-flex uk-flex-center uk-align-center uk-text-center"
        style={{ alignItems: 'center' }}
      >
        <div className="user">
          <img
            id="avatar"
            width="120"
            className="uk-border-circle"
            src="https://image.flaticon.com/icons/svg/167/167750.svg"
            alt=""
          />
          <h4 className="uk-text-truncate">Nkaka Manzi</h4>
          <h6 className="uk-text-truncate">Agent</h6>
          <div id="email" className="uk-text-truncate">
            fab@gmail.com
          </div>
          <span id="status" className="uk-margin-top uk-label uk-label-success">
            Online
          </span>
        </div>
        <br />
      </div>
      <hr className="uk-divider-icon" />
      <ul className="uk-nav uk-nav-default">
        <li className="uk-nav-header">devices</li>
        <li>
          <Link to="/device-store">Store</Link>
        </li>

        <li className="uk-nav-header">users</li>
        <li>
          <Link to="/user-details">Details</Link>
        </li>
      </ul>
    </div>
    <div className="content-padder content-background">
      <div className="uk-section-small uk-section-default header">
        <div className="uk-container uk-container-large">
          <h1>&lsquo;</h1>
          <p>Welcome, Nkaka Manzi</p>
          <small>
            <span className="uk-text-muted">
              {location.split('-')[0].slice(1)}
              {'/ '}

            </span>
            <span className="uk-text-emphasis">
              {location
                .split('-')
                .slice(1)
                .map((e) => <span style={{ marginRight: '2px' }}>{e}</span>)}
            </span>
          </small>
        </div>
      </div>
      <div className="uk-section-small">
        <div className="uk-container uk-container-large uk-height-1-1 uk-width-1-1">
          {children}
        </div>
      </div>
    </div>
  </>
);

export default Layout;
