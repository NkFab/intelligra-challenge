import React from 'react';
import { useHistory } from 'react-router-dom';
import { sortByDevices, devices } from 'dummyData';
import {
  Layout, Card, Modal, DropDown,
} from '../components';

const DeviceStore: React.FunctionComponent<{}> = (): React.ReactElement => {
  const history = useHistory();

  return (
    <Layout location={history.location.pathname}>
      <Modal title="Add a new device">
        <form>
          <fieldset className="uk-fieldset">
            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="Device Name" />
            </div>
            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="Serian Number (S/N)" />
            </div>
            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="Model year" />
            </div>
            <div className="uk-margin">
              <textarea className="uk-textarea" rows={5} placeholder="Description" style={{ resize: 'none', overflowY: 'hidden' }} />
            </div>
            <div className="js-upload uk-placeholder uk-text-center">
              <span data-uk-icon="icon: cloud-upload" />
              <span className="uk-text-middle">Attach device photos by dropping them here or</span>
              <div className="uk-form-custom uk-margin-left">
                <input type="file" multiple />
                <span className="uk-link">selecting one</span>
              </div>
            </div>

            <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden />
          </fieldset>
        </form>
        <p className="uk-text-right">
          <button
            className="uk-button uk-button-default uk-modal-close uk-margin-right"
            type="button"
          >
            Cancel
          </button>
          <button className="uk-button uk-button-primary" type="button">
            Save
          </button>
        </p>
      </Modal>
      <div className="uk-background-default uk-padding">
        <div className="uk-flex uk-flex-between">
          <div className="uk-margin-medium">
            <form className="uk-search uk-search-default uk-margin-right">
              <span
                className="uk-form-icon uk-search-icon-flip"
                data-uk-icon="icon: search"
              />
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search"
              />
            </form>
            <DropDown title="Sort By" items={sortByDevices} />
          </div>
          <div>
            <button
              className="uk-button uk-button-primary uk-margin-small-right"
              type="button"
              uk-toggle="target: #modal-example"
            >
              Add Device
            </button>
          </div>
        </div>

        <div
          className="uk-child-width-1-3@m"
          data-uk-grid="parallax: 150"
          data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
        >

          {devices?.map(({
            photo, name, sn, descritption, added,
          }) => (
            <div className="uk-margin-bottom">
              <Card
                key={sn}
                title={name}
                sn={sn}
                photo={photo}
                description={descritption}
                timeAdded={added}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DeviceStore;
