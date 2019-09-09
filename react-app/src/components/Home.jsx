import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';


class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
          drupal_base_path: 'http://localhost:8001/headless-drupal/',
          base_path: 'http://localhost:8001/',
          react_base_path: 'http://localhost:8001/react-app/build',
          variables: [],
      }
  }

    componentDidMount() {
        const { drupal_base_path } = this.state;
        var VariablesAPI = drupal_base_path + 'landingpage';
        fetch(VariablesAPI)
            .then(response => response.json())
            .then(data => this.setState({ variables: data }));
    }

  render() {
      const { variables } = this.state;
    return (
        <div className="Home">
          <Header></Header>
            <div className="page-title">Home</div>
            {variables.map(variable =>
            <div className="content" dangerouslySetInnerHTML={{ __html: variable.body }}>
            </div>
            )}
          <Footer></Footer>
        </div>
    );
  }
}

export default Home;
