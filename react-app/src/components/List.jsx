import React, { Component } from 'react';


import Header from './Header';
import Footer from './Footer';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drupal_base_path: 'http://localhost:8001/headless-drupal/',
            base_path: 'http://localhost:8001/',
            react_base_path: 'http://localhost:8001/react-app/build',
            articles: [],
        }
    }

    componentDidMount() {
        const { drupal_base_path } = this.state;
        var VariablesAPI = drupal_base_path + 'articlelist';
        fetch(VariablesAPI)
            .then(response => response.json())
            .then(data => this.setState({ articles: data }));
    }

    render() {
        const { articles, react_base_path } = this.state;
        return (
        <div>
            <Header></Header>
            <div className="page-title">Article Single View</div>
            {articles.map(article =>
                <div className="article_item">
                    <br/>
                    <div className="articletitle"><a href={react_base_path + '/#/node/' + article.nid }>{article.title}</a></div>
                    <div className="articlebody" dangerouslySetInnerHTML={{ __html: article.body }}></div>
                    <div className="articleinfo"><span>Created By :</span> {article.uid}</div>
                    <div className="articleinfo"><span>Created On :</span> {article.created}</div>
                </div>
            )}
            <Footer></Footer>
        </div>
        );
    }
}

export default List;
