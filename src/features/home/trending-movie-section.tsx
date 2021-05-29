import React from 'react';
import {useSelector} from 'react-redux';
import {
  SectionRoot,
  SectionTitle,
  SectionMovieSlider,
  SectionMovieSliderItem,
  SectionMovieSliderContainer,
} from './styles';

import {AppStore} from '../../redux/interface';
import {TrendingMovies} from '../../interfaces/movies';
import {Image} from '../../components';
import {RenderItemParams, MovieSectionProps} from './interfaces';

export function TrendingMovieSection(props: MovieSectionProps) {
  const {openDetail} = props;
  const recommendedMovies = useSelector(
    ({trendingMovieReducer}: AppStore) => trendingMovieReducer,
  );

  const renderItem = (params: RenderItemParams) => {
    const item: TrendingMovies = params.item;

    const openDetailHandler = () => {
      openDetail(item.movie.ids.trakt);
    };

    return (
      <SectionMovieSliderItem onPress={openDetailHandler}>
        <Image height={240} width={160} url={item.posterUrl} />
      </SectionMovieSliderItem>
    );
  };

  return (
    <SectionRoot>
      <SectionTitle>Filmes em tendência</SectionTitle>
      <SectionMovieSliderContainer>
        <SectionMovieSlider
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommendedMovies.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </SectionMovieSliderContainer>
    </SectionRoot>
  );
}
