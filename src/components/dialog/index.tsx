/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Animated, Dimensions} from 'react-native';
import {DialogProps, DialogRefProps} from './interfaces';
import {
  DialogCloseButton,
  DialogContainer,
  DialogContentContainer,
  DialogRoot,
  styles,
} from './styles';

const {height: screenHeight} = Dimensions.get('screen');

export function DialogWithRef(
  props: DialogProps,
  ref: React.Ref<DialogRefProps>,
) {
  const {children} = props;
  const {onClose} = props;

  const [render, setRender] = React.useState(false);
  const [animValue] = React.useState(new Animated.Value(screenHeight));

  const execAnimation = React.useCallback(
    value => {
      Animated.timing(animValue, {
        toValue: value,
        delay: 200,
        duration: 600,
        useNativeDriver: true,
      }).start();
    },
    [animValue],
  );

  const handleOpen = React.useCallback(() => {
    setRender(true);
  }, [render]);

  const handleClose = React.useCallback(() => {
    execAnimation(screenHeight);
    setTimeout(() => {
      if (onClose) {
        onClose();
        setRender(false);
      }
    }, 800);
  }, [render]);

  React.useEffect(() => {
    if (render) {
      execAnimation(0);
    }
  }, [render]);

  React.useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
  }));

  return (
    <>
      {render && (
        <DialogRoot>
          <DialogContainer>
            <Animated.View
              style={{
                ...styles.animatedView,
                transform: [{translateY: animValue}],
              }}>
              <DialogContentContainer>
                <DialogCloseButton onPress={handleClose} />
                {children}
              </DialogContentContainer>
            </Animated.View>
          </DialogContainer>
        </DialogRoot>
      )}
    </>
  );
}

export const Dialog =
  React.forwardRef<DialogRefProps, DialogProps>(DialogWithRef);
