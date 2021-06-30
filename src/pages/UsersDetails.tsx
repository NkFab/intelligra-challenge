import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Table } from '../components';

const UsersDetails: React.FunctionComponent<{}> = (): React.ReactElement => {
  const history = useHistory();
  return (
    <Layout location={history.location.pathname}>
      <Table />
    </Layout>
  );
};

export default UsersDetails;
