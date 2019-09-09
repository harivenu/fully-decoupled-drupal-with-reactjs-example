import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Single extends Component {
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
        const LISTAPI = drupal_base_path + 'articlelist';
        fetch(LISTAPI)
            .then(response => response.json())
            .then(data => this.setState({ variables: data.filter(c => c.nid === this.props.match.params.id)}));
    }

    render() {
        const { variables } = this.state;
        return (
            <div>
                <Header></Header>
                <div className="page-title">Article List View</div>
                {variables.map(variable =>
                    <div className="article_item">
                        <br/>
                        <div className="articletitle">{variable.title}</div>
                        <div className="articlebody" dangerouslySetInnerHTML={{ __html: variable.body }}></div>
                        <div className="articleinfo"><span>Created By :</span> {variable.uid}</div>
                        <div className="articleinfo"><span>Created On :</span> {variable.created}</div>
                    </div>
                )}
                <Footer></Footer>
            </div>
        );
    }
}

export default Single;