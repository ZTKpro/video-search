import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getAllMovies } from "./components/store/operations";

import "./components/style/fonts.scss";
import "./components/style/global.scss";

import Header from "./components/header/header.tsx";
import VideoElementList from "./components/VideoElementList/VideoElementList.tsx";

function App({ movies, getAllMovies }) {
  useEffect(() => {
    getAllMovies();
  });
  return (
    <div className="App">
      <Header />
      <main className="max-width">
        <VideoElementList />
        <h2>
          Saved results: <span> {movies.list.slice(0, 10).length} </span>
        </h2>
        <VideoElementList />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
