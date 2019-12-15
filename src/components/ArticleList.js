import React from "react";
import { connect } from "react-redux";
import { getNYT } from "../actions";
import ArticleCard from "./ArticleCard";

const ArticleList = (props) => {

    return (
        <>
        {props.data.map((element, index) => {
            console.log(element.multimedia)
            return <ArticleCard 
            key={index} 
            img={element.multimedia.length > 0 ? element.multimedia[1].url : require("../images/no-image.jpg")} 
            title={element.title} 
            desc={element.abstract} 
            url={element.short_url} 
            author={element.byline} />
        })}
        </>
    )
}

const mapStateToProps = state => {
    return {
      data: state.sites.data,
      isFetching: state.sites.isFetching,
      error: state.sites.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getNYT }
  )(ArticleList);