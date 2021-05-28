import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 1;
`;

export const BackgroundRoot = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CardRoot = styled.View`
  height: 75%;
  width: 100%;
  position: absolute;
  bottom: 1px;
`;

export const CardContent = styled.ScrollView`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
`;

export const SectionRoot = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  padding-horizontal: 8px;
  width: 100%;
  height: 280px;
`;

export const SectionTitle = styled.Text`
  color: #000000;
  font-family: Roboto-Regular;
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

export const MovieNameText = styled.Text`
  font-family: Roboto-Regular;
  text-align-vertical: center;
  font-size: 14px;
  color: #000000;
  text-align: center;
  padding-vertical: 4px;
`;

export const MovieDetailDialogContentRoot = styled.View`
  height: 172px;
  width: 100%;
  flex-direction: row;
`;

export const MovieDetailsTextBox = styled.View`
  flex: 1;
  bottom: 24px;
`;

export const MovieDetailTitleBox = styled.View`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 48px;
  padding-left: 8px;
`;

export const MovieDetailTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 18px;
  color: #ffffff;
`;

export const MovieDetailDescriptionBox = styled.View`
  flex: 1;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 48px;
  padding-left: 8px;
  background-color: green;
`;

export const MovieDetailDescription = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #ffffff;
`;

export const MovieDetailDialogImageContainer = styled.View`
  height: 100%;
  width: 124px;
  bottom: 24px;
`;

export const MovieDetailDialogImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const styles = StyleSheet.create({
  cardContentContainer: {
    paddingVertical: 16,
  },
});
