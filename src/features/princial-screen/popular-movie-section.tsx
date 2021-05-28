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
import {PopularMovies} from '../../interfaces/movies';
import {Image} from '../../components';
import {RenderItemParams, MovieSectionProps} from './interfaces';

export function PopularMovieSection(props: MovieSectionProps) {
  const {openDetail} = props;
  const popularMovies = useSelector(
    ({popularMovieReducer}: AppStore) => popularMovieReducer,
  );

  const renderItem = (params: RenderItemParams) => {
    const item: PopularMovies = params.item;

    const openDetailHandler = () => {
      openDetail(item.ids.trakt);
    };

    return (
      <SectionMovieSliderItem onPress={openDetailHandler}>
        <Image height={240} width={160} url={item.posterUrl} />
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
