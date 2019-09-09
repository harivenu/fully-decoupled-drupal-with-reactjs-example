import React, { Component } from 'react';

class Header extends Component {

  constructor(props){
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
    var VariablesAPI = drupal_base_path + 'headerandfooter';
    fetch(VariablesAPI)
        .then(response => response.json())
        .then(data => this.setState({ variables: data }));
  }

  render() {
      const { variables, base_path, react_base_path } = this.state;
      return (
          <div className="header">
              {variables.map(variable =>
              <div>
                  <div className="left"><div className="logo"><img src={base_path + variable.field_logo }></img></div><div className="slogan">{variable.field_site_name}</div> </div>
              <div className="right">
                 <div className="nav">
                 <ul>
                    <li><a href={ react_base_path + "/"} >Home</a></li>
                    <li><a href={ react_base_path + "/#/list"} >Articles</a></li>
                 </ul>
                 </div>
              </div>
              </div>
              )}
          </div>
      );
  }
}

export default Header;
