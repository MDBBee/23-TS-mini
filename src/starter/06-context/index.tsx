import { useTheme, ThemeProvider } from './context';

function ParentCom() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();

  return (
    <div>
      <h2>React & Typescript</h2>
      <button
        onClick={() => {
          if (context.theme === 'dark') {
            context.setTheme('system');
            return;
          }
          context.setTheme('dark');
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
export default ParentCom;
