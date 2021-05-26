import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ImageProps} from './interfaces';
import {ImageContent, ImageRoot, LoadIndicator} from './styles';

export function Image(props: ImageProps) {
  const {url, ...otherProps} = props;
  const [state, setState] = React.useState({
    progress: 0,
    isLoading: false,
  });

  return (
    <ImageRoot {...otherProps}>
      <ImageContent
        onLoadStart={() => setState({...state, isLoading: true})}
        onProgress={({nativeEvent: {loaded, total}}) => {
          setState({...state, progress: Math.abs(loaded / total)});
        }}
        onLoadEnd={() => setState({...state, isLoading: false})}
        resizeMode="cover"
        source={{
          uri: url,
        }}
      />
      {state.isLoading && (
        <LoadIndicator>
          <ActivityIndicator size="large" color="#000000" />
        </LoadIndicator>
      )}
    </ImageRoot>
  );
}
