import React from 'react';

const Table: React.FunctionComponent<{}> = (): React.ReactElement => (
  <>
    <div
      id="modal-example"
      style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
      }}
      data-uk-modal
    >
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title">Headline</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id
          est laborum.

        </p>
        <p className="uk-text-right">
          <button className="uk-button uk-button-default uk-modal-close uk-margin-right" type="button">Cancel</button>
          <button className="uk-button uk-button-primary" type="button">Save</button>
        </p>
      </div>
    </div>
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
