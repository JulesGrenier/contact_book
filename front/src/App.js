import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ContactsListContainer from './containers/ContactsListContainer';
import ContactContainer from './containers/ContactContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid doubling stackable>
          <Grid.Row className="pb-0 pt-1 px-1">
            <Grid.Column mobile={16} tablet={7} computer={5} className="border-right">
              <ContactsListContainer />
            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={9} computer={11}>
              <ContactContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;