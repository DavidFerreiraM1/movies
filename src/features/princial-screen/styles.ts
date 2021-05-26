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
  height: 280px;
  padding-vertical: 8px;
`;

export const SectionMovieSlider = styled.FlatList`
  height: 100%;
`;

export const SectionMovieSliderItem = styled.View`
  width: 160px;
  height: 240px;
  margin-horizontal: 8px;
  border-radius: 8px;
`;

export const SliderItemImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const MovieNameText = styled.Text`
  font-size: 14px;
  color: #000000;
  font-family: Roboto-Regular;
  text-align: center;
  text-align-vertical: center;
  padding-vertical: 4px;
`;

export const styles = StyleSheet.create({
  cardContentContainer: {
    paddingVertical: 16,
  },
});
