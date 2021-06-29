import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Table from '../components/Table';

const UsersDetails: React.FunctionComponent<{}> = (): React.ReactElement => {
  const history = useHistory();
  return (
    <Layout location={history.location.pathname}>
      <Table />
    </Layout>
  );
};

export default UsersDetails;
