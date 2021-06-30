import React from 'react';

type Props = {
  title: string,
  children: object
}

const Modal: React.FunctionComponent<Props> = ({ title, children }: Props): React.ReactElement => (
  <div
    id="modal-example"
    style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
    }}
    data-uk-modal
  >
    <div className="uk-modal-dialog uk-modal-body">
      <h2 className="uk-modal-title">{title}</h2>
      {children}
    </div>
  </div>
);

export default Modal;
