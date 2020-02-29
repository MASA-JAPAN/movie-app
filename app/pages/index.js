import React, { useState, useEffect } from "react";

import SideMenu from "../components/sideManu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import { getMovies, getCategories } from "../actions/index";

const Home = props => {
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu categories={props.categories} appName="Movie DB" />
            </div>

            <div className="col-lg-9">
              <Carousel images={props.images || []} />

              <div className="row">
                <MovieList movies={props.movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.image,
    name: movie.name
  }));

  return { movies, images, categories };
};

export default Home;
