import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Page,
  Layout,
  Card,
  Button,
  Banner,
  TextField,
  Stack,
  Collapsible,
  Badge,
} from '@shopify/polaris';
import './App.css';

class App extends Component {
// here we set some defaults for our state

  // the render method is what decides what we see in the browser
  render() {
    return (
      <Page title="Polaris for Prototyping - Learning State">
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <StatefulCatCounter />
              <StatefulCatCounter />
              <StatefulCatCounter />
              <StatefulCatCounter />
              <StatefulCatCounter />
              <StatefulCatCounter />
              <StatefulCatCounter />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

const CatCounter = (props) => {
  return (
    <div>
      <Badge>🐈 {props.cats}</Badge>
      <Button onClick={props.onAddCat}>
        Add Cats
      </Button>
    </div>
  );
}

class StatefulCatCounter extends React.Component {
  state = {
    cats: 0,
  };

  constructor(props) {
    super(props);
    this.addCat = this.addCat.bind(this);
  }

  addCat() {
    this.setState({cats: this.state.cats + 3});
  }

  render() {
    return (
      <CatCounter cats={this.state.cats} onAddCat={this.addCat} />
    );
  }
}


export default App;
