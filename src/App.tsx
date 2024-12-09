import Component from './starter/02-props';

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component name="Bobby" id={123}>
        <h2>Hello World</h2>
      </Component>
    </main>
  );
}

export default App;
