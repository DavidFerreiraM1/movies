import styled from 'styled-components/native';
import {ImagerootProps} from './interfaces';

export const ImageRoot = styled.View`
  height: ${({height}: ImagerootProps) => height}px;
  width: ${({width}: ImagerootProps) => width}px;
`;

export const ImageContent = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const LoadIndicator = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
`;
