import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const DialogRoot = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2000;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const DialogContainer = styled.View`
  flex: 1;
`;

export const DialogContentContainer = styled.View`
  width: 100%;
  min-height: 164px;
  background-color: #000000;
  position: absolute;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  bottom: 0;
`;

export const DialogHeader = styled.View`
  width: 100%;
  height: 48px;
  align-items: flex-end;
`;

export const DialogCloseButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  margin: 8px;
  background-color: red;
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
