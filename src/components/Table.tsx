import React from 'react';
import Modal from './Modal';

type Data = {
  name: string;
  address: string;
  phone: string;
  eligibility: string;
  device: string;
}

type Props = {
  headers: Array<string>;
  data: Array<Data>;
};

const Table: React.FunctionComponent<Props> = ({
  headers,
  data,
}: Props): React.ReactElement => {
  const [details, setDetails] = React.useState<Data>({} as Data);

  return (
    <>
      <Modal title="User's KYCs">
        <div>
          <div className="uk-flex uk-flex-middle user-details">
            <div className="uk-margin-right">
              <img
                id="avatar"
                width="150"
                className="uk-border-circle"
                src="https://image.flaticon.com/icons/svg/167/167750.svg"
                alt=""
              />
            </div>
            <div className="details">
              <h4>{details.name}</h4>
              <div className="uk-flex uk-flex-middle">
                <span className="uk-margin-small-right" data-uk-icon="icon: location" />
                {details.address}
              </div>
              <div className="uk-flex uk-flex-middle">
                <span className="uk-margin-small-right" data-uk-icon="icon: receiver" />
                {details.phone}
              </div>
              <div className="uk-flex uk-flex-middle">
                <span className="uk-margin-small-right" data-uk-icon="icon: phone" />
                {details.device}
              </div>

              {details.eligibility === 'Eligible' && (
              <div className="uk-flex uk-flex-middle">
                <span data-uk-icon="icon: 'file-text'" data-uk-file-pdf-icon />
                <span>...intelligra_contract.pdf</span>
              </div>
              )}
              <div>
                <span
                  className={`uk-label ${
                    details.eligibility === 'Eligible' && 'uk-label-success'
                  } ${
                    details.eligibility === 'Non-Eligible' && 'uk-label-danger'
                  }  ${
                    details.eligibility === 'In Review' && 'uk-label-warning'
                  }`}
                >
                  {details.eligibility}
                </span>
              </div>
            </div>
          </div>
          <p className="uk-text-right">

            <button className="uk-button uk-button-primary" data-uk-toggle="target: .user-details" type="button">Edit</button>
          </p>
        </div>

        <div className="user-details" hidden>
          <form>
            <fieldset className="uk-fieldset">
              <div className="uk-margin">
                <input className="uk-input" type="text" value={details.name} placeholder="Name" />
              </div>
              <div className="uk-margin">
                <input className="uk-input" type="text" value={details.address} placeholder="Address" />
              </div>
              <div className="uk-margin">
                <input className="uk-input" type="text" value={details.phone} placeholder="Phone Number" />
              </div>
              <div className="uk-margin">
                <div className="uk-form-controls">
                  <select className="uk-select" id="form-stacked-select" value={details.device}>
                    <option>iPhone 12</option>
                    <option>iPhone X</option>
                    <option>samsung Z fold</option>
                    <option>samsung galaxy 10</option>
                  </select>
                </div>
              </div>
              <div className="uk-margin">
                <div className="uk-form-controls">
                  <select className="uk-select" id="form-stacked-select" value={details.eligibility}>
                    <option>Eligible</option>
                    <option>In Review</option>
                    <option>Non-Eligible</option>
                  </select>
                </div>
              </div>
              <div className="js-upload uk-placeholder uk-text-center">
                <span data-uk-icon="icon: cloud-upload" />
                <span className="uk-text-middle">Attach eligibility contract file by dropping it here or</span>
                <div className="uk-form-custom uk-margin-small-left">
                  <input type="file" />
                  <span className="uk-link">selecting it</span>
                </div>
              </div>
              <div className="js-upload uk-placeholder uk-text-center">
                <span data-uk-icon="icon: cloud-upload" />
                <span className="uk-text-middle">Attach eligibility a photo by dropping it here or</span>
                <div className="uk-form-custom uk-margin-small-left">
                  <input type="file" />
                  <span className="uk-link">selecting it</span>
                </div>
              </div>

              <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden />
            </fieldset>
          </form>
        </div>

      </Modal>
      <table className="uk-table uk-table-hover uk-table-divider uk-background-default">
        <thead>
          <tr>
            {headers?.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((entry) => (
            <tr key={entry.name}>
              <td>{entry.name}</td>
              <td>{entry.address}</td>
              <td>{entry.phone}</td>
              <td>{entry.device}</td>
              <td>
                <span
                  className={`uk-label ${
                    entry.eligibility === 'Eligible' && 'uk-label-success'
                  } ${
                    entry.eligibility === 'Non-Eligible' && 'uk-label-danger'
                  }  ${
                    entry.eligibility === 'In Review' && 'uk-label-warning'
                  }`}
                >
                  {entry.eligibility}
                </span>
              </td>
              <td>
                <button
                  onClick={() => setDetails(entry)}
                  className="uk-button uk-button-default uk-margin-small-right"
                  type="button"
                  data-uk-toggle="target: #modal-example"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
