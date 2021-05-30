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
import {RecommendedMovies} from '../../interfaces/movies';
import {Image} from '../../components';
import {RenderItemParams, MovieSectionProps} from './interfaces';

export function RecommendedMovieSection(props: MovieSectionProps) {
  const {openDetail} = props;
  const recommendedMovies = useSelector(
    ({recommendedMovieReducer}: AppStore) => recommendedMovieReducer,
  );

  const renderItem = (params: RenderItemParams) => {
    const item: RecommendedMovies = params.item;

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
      <SectionTitle>Recomendações para você</SectionTitle>
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
