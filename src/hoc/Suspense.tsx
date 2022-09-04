import { Suspense } from 'react';

export function withSuspense<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  const { displayName, name = 'Component' } = WrappedComponent;

  const ComponentWithSuspense = (props: T) => (
    <Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent {...(props as T)} />
    </Suspense>
  );

  ComponentWithSuspense.displayName = `withSuspense(${displayName || name})`;

  return ComponentWithSuspense;
}
