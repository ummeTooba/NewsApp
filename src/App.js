import "./App.css";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./news components/Navbar";
import News from "./news components/News";

export default class App extends Component {
  pageSize=12;
  apiKey = process.env.REACT_APP_NEWS_API;

  state ={
    progress:0
  }

  setProgress = (progress)=>{
      this.setState ({progress: progress});
  } 

  render() {
    return (
      <BrowserRouter>
        <div>
        <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
              
            />
          <Navbar />
          
          <Routes>
            <Route path="/"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="general" />} />
            <Route path="/business"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/general"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="general" />} />
            <Route path="/health"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/science"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/sports"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology"element={<News setProgress={this.setProgress} apiKey ={this.apiKey} pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
