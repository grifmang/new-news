import React from "react";
import ArticleCard from "./ArticleCard";
import { connect } from "react-redux";
import { getNYT } from "../actions";

const YourNews = (props) => {
    console.log(props)

    return (
        <>
        {props.data.map(element => {
            return <ArticleCard />
        })}
        </>
    )
}     

const mapStateToProps = state => {
    return {
      data: state.data,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getNYT }
  )(YourNews);