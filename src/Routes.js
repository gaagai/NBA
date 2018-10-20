import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home'
import Layout from './hoc/Latout/Layout';
import NewsArticles from './components/Articles/Post/index';
import VideoArticles from './components/Articles/Videos/VideosArticles';
import NewsMain from './components/News/NewsMain';
import videosSec from './components/Articles/Videos/videosSec';


class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component = {Home}/>
                    <Route path="/news" exact component = {NewsMain}/>
                    <Route path="/videos" exact component = {videosSec}/>
                    <Route path="/articles/:id" exact component = {NewsArticles}/>
                    <Route path="/videos/:id" exact component = {VideoArticles}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;