import React from 'react';

export interface ComponentWithProps {
  children?: React.ReactNode;
}

export interface DialogProps extends ComponentWithProps {
  onClose?: Function;
}

export interface DialogRefProps {
  open: () => void;
  close: () => void;
}
