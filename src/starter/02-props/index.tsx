import { type PropsWithChildren } from 'react';

// type componentProps = { name: string; id: number; children?: React.ReactNode };
type componentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: componentProps) {
  return (
    <div>
      <h2>Name: {name}</h2>
      {children}
      <h2>ID: {id}</h2>
    </div>
  );
}
export default Component;
