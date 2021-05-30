import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ImageProps} from './interfaces';
import ImageNotFound from '../../assets/images/not-found.jpg';
import {ImageContent, ImageRoot, LoadIndicator} from './styles';

export function Image(props: ImageProps) {
  const {url, ...otherProps} = props;
  const [state, setState] = React.useState({
    isLoading: true,
  });

  const ImageSource = url !== '' ? {uri: url} : ImageNotFound;

  return (
    <ImageRoot {...otherProps}>
      <ImageContent
        onLoadEnd={() => {
          setState({isLoading: false});
        }}
        resizeMode="cover"
        source={ImageSource}
      />

      {state.isLoading === true && (
        <LoadIndicator>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </LoadIndicator>
      )}
    </ImageRoot>
  );
}
