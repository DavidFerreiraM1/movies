/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useSelector} from 'react-redux';
import {Dialog, DialogContent} from '../../components';
import {DialogRefProps} from '../../components/dialog/interfaces';
import {PopularMovies} from '../../interfaces/movies';
import {AppStore} from '../../redux/interface';
import {MovieDetailDialogRef as MovieDetailDialogRefInterface} from './interfaces';
import {
  MovieDetailDialogContentRoot,
  MovieDetailDialogImage,
  MovieDetailDialogImageContainer,
  MovieDetailTitleBox,
  MovieDetailDescriptionBox,
  MovieDetailsTextBox,
  MovieDetailTitle,
  MovieDetailDescription,
  MovieDetailBoxFavorite,
  MovieDetailButtonFavorite,
  MovieDetailButtonFavoriteText,
} from './styles';

function MovieDetailDialogRef(
  props: any,
  ref: React.Ref<MovieDetailDialogRefInterface>,
) {
  const dialogRef = React.createRef<DialogRefProps>();
  const storeMovieData = useSelector(
    ({popularMovieReducer}: AppStore) => popularMovieReducer,
  );

  const [data, setData] = React.useState({
    id: '',
    urlImg: '',
    title: '',
    description: '',
  });

  const openDetail = (movieId: number) => {
    const finder: any = ({ids}: PopularMovies) => ids.trakt === movieId;
    const {posterUrl, title, ids, overview}: any =
      storeMovieData.list.find(finder);

    setData({
      id: ids.trakt,
      title,
      urlImg: posterUrl,
      description: overview,
    });
  };

  React.useImperativeHandle(ref, () => ({
    openDetail,
  }));

  React.useEffect(() => {
    if (data.id) {
      dialogRef.current?.open();
    }
  }, [data]);

  return (
    <Dialog ref={dialogRef}>
      <DialogContent>
        <MovieDetailDialogContentRoot>
          <MovieDetailDialogImageContainer>
            <MovieDetailDialogImage
              source={{
                uri: data.urlImg,
              }}
            />
          </MovieDetailDialogImageContainer>
          <MovieDetailsTextBox>
            <MovieDetailTitleBox>
              <MovieDetailTitle>{data.title}</MovieDetailTitle>
            </MovieDetailTitleBox>
            <MovieDetailDescriptionBox>
              <MovieDetailDescription>
                {data.description}
              </MovieDetailDescription>
            </MovieDetailDescriptionBox>
            <MovieDetailBoxFavorite>
              <MovieDetailButtonFavorite>
                <MovieDetailButtonFavoriteText>
                  Adicionar à lista
                </MovieDetailButtonFavoriteText>
              </MovieDetailButtonFavorite>
            </MovieDetailBoxFavorite>
          </MovieDetailsTextBox>
        </MovieDetailDialogContentRoot>
      </DialogContent>
    </Dialog>
  );
}

export const MovieDetailDialog =
  React.forwardRef<MovieDetailDialogRefInterface, any>(MovieDetailDialogRef);
