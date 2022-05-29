import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size = '', history, linkUrl, match }) => {
  const menuItemClasses = classNames('menu-item', { size });

  const menuItemClickHandler = () => history.push(`${match.url}${linkUrl}`);

  return (
    <div className={menuItemClasses} onClick={menuItemClickHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
