import React from 'react';
// import Modal from './Modal';

const Table: React.FunctionComponent<{}> = (): React.ReactElement => (
  <>
    {/* <Modal /> */}
    <table className="uk-table uk-table-hover uk-table-divider uk-background-default">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Eligibility</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Eman</td>
          <td>sasff</td>
          <td>0788756757</td>
          <td><span className="uk-label uk-label-success">Eligible</span></td>
          <td><button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Details</button></td>
        </tr>
        <tr>
          <td>Eman</td>
          <td>sasff</td>
          <td>0788756757</td>
          <td><span className="uk-label uk-label-warning">Pending</span></td>
          <td><button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Details</button></td>
        </tr>
        <tr>
          <td>Eman</td>
          <td>sasff</td>
          <td>0788756757</td>
          <td><span className="uk-label uk-label-danger">Non-Eligible</span></td>
          <td><button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Details</button></td>
        </tr>
      </tbody>
    </table>

  </>
);

export default Table;
