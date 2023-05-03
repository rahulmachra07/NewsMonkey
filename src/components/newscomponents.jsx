import React, { Component } from "react";
import Newsitems from "./newsitems";
import './newscomponents.css';
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class NewsComp extends Component{

    static defaultProps = {
        country : 'us',
        pageSize : 8,
        category : 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    constructor(props){
        super(props);
        this.state = {
            articles:[],
            loading:false,
            page:1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;    
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70652fbacfec4b06a74c3fb249635ea4&pageSize=${this.props.pageSize}`
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false})
    }

    handlePrevButton = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70652fbacfec4b06a74c3fb249635ea4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            page:this.state.page-1,
            articles:parseddata.articles,
            loading:false
        })
    }

    handleNextButton = async()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70652fbacfec4b06a74c3fb249635ea4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading:true
            })
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                page:this.state.page+1,
                articles:parseddata.articles,
                loading:false
            })
        }
    }
        
    render(){
        return(
            <>
                <div className="container my-3">
                    <h3 className="text-center">Top Headlines</h3>
                    {this.state.loading && <Spinner/>}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element)=>{
                            return <div className='col-md-4' key={element.url}>
                                <Newsitems imageUrl={element.urlToImage?element.urlToImage:"https://i.redd.it/mn9c32es4zi21.png"} tittle={element.title?element.title.slice(0,50):""} desc={element.description?element.description.slice(0,70):""}
                                    newsUrl={element.url}
                                />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevButton}>&#8592;Previous</button>
                        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-dark" onClick={this.handleNextButton}>Next&#8594;</button>
                    </div>
                </div>
            </>
        )    
    }
        
}

export default NewsComp;