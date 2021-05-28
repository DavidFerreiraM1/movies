import React from 'react';

export function renderWithContext(ContextComponent: Function) {
  const render = (ChildComponent: Function) => () => {
    return (
      <ContextComponent>
        <ChildComponent />
      </ContextComponent>
    );
  };

  return render;
}
