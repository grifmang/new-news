import React from "react";

const YourNews = (props) => {

    return (
        <>

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