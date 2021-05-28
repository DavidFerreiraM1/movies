export interface PopularMovies {
  title: string;
  year: number;
  posterUrl: string;
  ids: {
    trakt: number;
    slug: string;
    imdb: string;
    tmdb: number;
  };
  tagline: string;
  overview: string;
  released: string;
}

export interface TrendingMovies {
  watchers: number;
  posterUrl: string;
  movie: {
    title: string;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      imdb: string;
      tmdb: number;
    };
  };
}

export interface RecommendedMovies {
  user_count: number;
  posterUrl: string;
  movie: {
    title: string;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      imdb: string;
      tmdb: number;
    };
  };
}
