import React from 'react';
import { Icon } from 'semantic-ui-react';

const Header = ({ favorite }) => {

  const isFavorite = favorite ? 'star' : 'star outline';

  return (
    <div id="header">
      <div className="header-top d-flex justify-content-end align-items-center py-1_5 px-1">
        <div className="icon-group">
          <Icon size='large' corner name='pencil' className="c-pointer" />
          <Icon size='large' corner name={isFavorite} className="ml-1 c-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;