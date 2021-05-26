import React from 'react';
import {useSelector} from 'react-redux';
import {
  SectionRoot,
  SectionTitle,
  SectionMovieSlider,
  SectionMovieSliderItem,
  SectionMovieSliderContainer,
  MovieNameText,
} from './styles';

import {AppStore} from '../../redux/interface';
import {PopularMovies} from '../../interfaces/movies';
import {Image} from '../../components';

interface RenderItemParams {
  item: any;
  index: number;
}

export function PopularMovieSection() {
  const popularMovies = useSelector(
    ({popularMovieReducer}: AppStore) => popularMovieReducer,
  );

  const renderItem = (params: RenderItemParams) => {
    const item: PopularMovies = params.item;

    return (
      <SectionMovieSliderItem>
        <Image height={240} width={160} url={item.posterUrl} />
        <MovieNameText>{item.title}</MovieNameText>
      </SectionMovieSliderItem>
    );
  };

  return (
    <SectionRoot>
      <SectionTitle>Populares</SectionTitle>
      <SectionMovieSliderContainer>
        <SectionMovieSlider
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularMovies.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </SectionMovieSliderContainer>
    </SectionRoot>
  );
}
