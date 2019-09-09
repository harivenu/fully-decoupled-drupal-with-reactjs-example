import React, { Component } from 'react';
import Header from "./Header";

class Footer extends Component {
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
        var VariablesAPI = drupal_base_path + 'headerandfooter';
        fetch(VariablesAPI)
            .then(response => response.json())
            .then(data => this.setState({ variables: data }));
	}
	
    render() {
        const { variables } = this.state;
      return (
          <div className="footer">
              {variables.map(variable =>
                  <div>{variable.field_footer_text}</div>
              )}
          </div>
	  );
    }
}

export default Footer;
