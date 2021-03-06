import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const DialogRoot = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 3000;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const DialogContainer = styled.View`
  flex: 1;
`;

export const DialogContentContainer = styled.View`
  width: 100%;
  min-height: 164px;
  background-color: #1d1d1d;
  position: absolute;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  bottom: 0;
`;

export const DialogCloseButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 24px;
  margin: 8px;
  background-color: red;
  position: absolute;
  z-index: 3000;
  top: 0;
  right: 0;
`;

export const DialogContent = styled.View`
  width: 100%;
  padding: 16px;
`;

export const styles = StyleSheet.create({
  animatedView: {
    height: '100%',
    width: '100%',
  },
});
