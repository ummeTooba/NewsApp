import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps ={
    country: 'us',
    pageSize: 8,
    category: 'general'

  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  async updateNews() {
   
    this.props.setProgress(10);
    console.log("topload  is working")
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);

    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }


  // by using componentdidMount we fetch data from API directly
  async componentDidMount() {
    this.updateNews();
    
  }
   capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    // console.log('i am constructor in news component');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  }
  handleOnnextClick = async () => {
    // if (!this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   console.log(parseData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false
    //   });
    // }
    this.setState({ page: this.state.page +1 });
    this.updateNews();
  };

  handleOnprevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false
    // });
    this.setState({ page: this.state.page -1 });
    this.updateNews();

  };
  fetchMoreData = async() => {
   
      this.setState({page: this.state.page +1});
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    })}
  
  render(){
    return (
      <>
      
        <h1 className="text-center"style={{margin: "30px 0px"}}>NewsApp - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {<Spinner/>} */}
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date ={element.publishedAt}
                source ={element.source.name}
              />
            </div>
          ))}
        </div>
        </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleOnprevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleOnnextClick}
            disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))}
          >
            Next &rarr;
          </button>
        </div> */}
      
      </>
    );
  }
}
