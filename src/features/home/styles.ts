import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Root = styled.View`
  background-color: rgba(0, 0, 0, 1);
  flex: 1;
`;

export const BackgroundRoot = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CardRoot = styled.View`
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 1px;
`;

export const CardContent = styled.ScrollView`
  background-color: rgba(0, 0, 0, 1);
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const SectionRoot = styled.View`
  margin-top: 0px;
  margin-bottom: 12px;
  padding-horizontal: 8px;
  width: 100%;
  height: 280px;
`;

export const SectionTitle = styled.Text`
  color: #ffffff;
  font-family: Roboto-Black;
  padding-horizontal: 8px;
  font-size: 18px;
`;

export const SectionMovieSliderContainer = styled.View`
  min-height: 280px;
  padding-vertical: 8px;
`;

export const SectionMovieSlider = styled.FlatList`
  height: 100%;
`;

export const SectionMovieSliderItem = styled.TouchableOpacity`
  width: 160px;
  height: 100%;
  margin-horizontal: 8px;
  border-radius: 8px;
`;

export const SliderItemImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const MovieDetailDialogContentRoot = styled.View`
  height: 240px;
  width: 100%;
  flex-direction: row;
`;

export const MovieDetailsTextBox = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const MovieDetailTitleBox = styled.View`
  padding-bottom: 8px;
  padding-right: 48px;
  padding-left: 16px;
`;

export const MovieDetailTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 20px;
  color: #ffffff;
`;

export const MovieDetailDescriptionBox = styled.ScrollView`
  flex: 1;
  padding-top: 0px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 16px;
`;

export const MovieDetailBoxFavorite = styled.View`
  width: 100%;
  padding-top: 8px;
  padding-right: 8px;
  padding-left: 16px;
`;

export const MovieDetailButtonFavorite = styled.TouchableOpacity`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const MovieDetailButtonFavoriteText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 14px;
  color: #000000;
`;

export const MovieDetailDescription = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #ffffff;
`;

export const MovieDetailDialogImageContainer = styled.View`
  height: 100%;
  width: 124px;
`;

export const MovieDetailDialogImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 8px;
`;

export const MovieScreenHeader = styled.View`
  height: 20%;
  width: 100%;
  padding-top: 24px;
  position: absolute;
  align-items: flex-end;
  justify-content: center;
  top: 1px;
`;

export const MovieListButtonBox = styled.View`
  height: 48px;
  width: 48px;
  margin-horizontal: 8px;
`;

export const MovieListButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;

export const styles = StyleSheet.create({
  cardContentContainer: {
    paddingVertical: 16,
  },
});
