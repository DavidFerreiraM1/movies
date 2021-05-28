/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Animated, Dimensions} from 'react-native';
import {DialogProps, DialogRefProps} from './interfaces';
import {
  DialogCloseButton,
  DialogContainer,
  DialogContentContainer,
  DialogHeader,
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
    if (onClose) {
      onClose();
    }
    setRender(false);
  }, [render]);

  React.useEffect(() => {
    render ? execAnimation(0) : execAnimation(screenHeight);
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
                <DialogHeader>
                  <DialogCloseButton onPress={handleClose} />
                </DialogHeader>
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
