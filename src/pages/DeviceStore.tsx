import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';

// const devices = [{
//   name: '', photo: '', description: '',
// }];

const DeviceStore: React.FunctionComponent<{}> = (): React.ReactElement => {
  const history = useHistory();
  return (
    <Layout location={history.location.pathname}>
      <div className="uk-child-width-1-3@m" uk-grid="parallax: 150" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default DeviceStore;
