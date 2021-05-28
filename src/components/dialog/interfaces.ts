import React from 'react';

export interface ComponentWithProps {
  children?: React.ReactNode;
}

export interface DialogRefProps {
  open: () => void;
  close: () => void;
}
