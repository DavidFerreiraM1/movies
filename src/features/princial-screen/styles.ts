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

export const Section = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: red;
  width: 100%;
  height: 280px;
`;

export const styles = StyleSheet.create({
  cardContentContainer: {
    paddingVertical: 16,
  },
});
