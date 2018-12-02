import React from 'react';
import { Header as UIHeader, Input, Icon } from 'semantic-ui-react';

import '../styles/header.scss';

const Header = () => {
  return (
    <div id='header'>
      <div className="header-top d-flex justify-between align-center py-1-5 px-1">
        <UIHeader as='h1' className="mb-0">Contacts</UIHeader>
        <Icon size='large' corner name='add' />
      </div>
      
      <div className="header-bottom bg-grey-primary py-1 px-2">
        <Input fluid icon='search' placeholder='Search...' />
      </div>
    </div>
  );
};

export default Header;