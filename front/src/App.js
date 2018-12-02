import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ContactsListContainer from './containers/ContactsListContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid centered doubling stackable divided>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={7} computer={5}>
              <Grid.Row>

                <Grid.Column width={16}>
                  <Header />
                </Grid.Column>

                <Grid.Column width={16}>
                  <ContactsListContainer />
                </Grid.Column>

              </Grid.Row>

            </Grid.Column>
            
            <Grid.Column mobile={16} tablet={9} computer={11}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;