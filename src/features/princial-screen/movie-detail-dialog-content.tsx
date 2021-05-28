/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useSelector} from 'react-redux';
import {Dialog, DialogContent} from '../../components';
import {DialogRefProps} from '../../components/dialog/interfaces';
import {AppStore} from '../../redux/interface';

import {
  FinderType,
  MovieDetailDialogRef as MovieDetailDialogRefInterface,
  MovieDetailStateData,
} from './interfaces';
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
import {popularFinder, recommendFinder} from './finders';

const finders = {
  popular: popularFinder,
  recommend: recommendFinder,
};

function MovieDetailDialogRef(
  props: any,
  ref: React.Ref<MovieDetailDialogRefInterface>,
) {
  const dialogRef = React.createRef<DialogRefProps>();
  const storeMovieData = useSelector((store: AppStore) => store);

  const [data, setData] = React.useState<MovieDetailStateData>({
    id: '',
    urlImg: '',
    title: '',
    description: '',
  });

  const openDetail = (movieId: number, finder: FinderType) => {
    const finderFunction = finders[finder];
    const {id, urlImg, title, description} = finderFunction(
      movieId,
      storeMovieData,
    );

    setData({
      title,
      id,
      urlImg,
      description,
    });
  };

  const handleClose = () => {
    setData({
      id: '',
      title: '',
      urlImg: '',
      description: '',
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
    <Dialog ref={dialogRef} onClose={handleClose}>
      <DialogContent>
        <MovieDetailDialogContentRoot>
          <MovieDetailDialogImageContainer>
            <MovieDetailDialogImage
              source={{
                uri: data.urlImg !== '' ? data.urlImg : undefined,
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
