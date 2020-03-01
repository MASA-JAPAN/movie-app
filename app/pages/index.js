import React, { useState, useEffect } from "react";

import SideMenu from "../components/sideManu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import { getMovies, getCategories } from "../actions/index";

const Home = props => {
  const [filter, setFilter] = useState("all");

  const changeCategory = category => {
    setFilter(category);
  };

  const filterMovies = movies => {
    if (filter === "all") {
      return movies;
    }

    return movies.filter(m => {
      return m.genre && m.genre.includes(filter);
    });
  };

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                changeCategory={changeCategory}
                activeCategory={filter}
                categories={props.categories}
                appName="Movie DB"
              />
            </div>

            <div className="col-lg-9">
              <Carousel images={props.images || []} />
              <h1>Displaying {filter} movies</h1>
              <div className="row">
                <MovieList movies={filterMovies(props.movies) || []} />
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
