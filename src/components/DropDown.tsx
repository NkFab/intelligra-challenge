import React from 'react';

type Props = {
    title: string,
    items: Array<string>
}

const DropDown: React.FunctionComponent<Props> = ({ title, items }: Props): React.ReactElement => (
  <>
    <button className="uk-button uk-button-default" type="button">{title}</button>
    <div data-uk-dropdown="offset: 10">
      <ul className="uk-nav uk-dropdown-nav">
        {items?.map((item: string) => <li><a href="/#">{item}</a></li>)}
      </ul>
    </div>
  </>
);

export default DropDown;
