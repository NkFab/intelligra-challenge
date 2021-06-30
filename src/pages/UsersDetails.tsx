import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Table, DropDown } from '../components';
import { userDetailsHeaders, userDetails, sortByUserKYC } from '../dummyData';

const UsersDetails: React.FunctionComponent<{}> = (): React.ReactElement => {
  const history = useHistory();
  return (
    <Layout location={history.location.pathname}>
      <div className="uk-background-default uk-padding">
        <div className="uk-flex">
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
            <DropDown title="Sort By" items={sortByUserKYC} />
          </div>

        </div>
        <Table headers={userDetailsHeaders} data={userDetails} />
      </div>

    </Layout>
  );
};

export default UsersDetails;
