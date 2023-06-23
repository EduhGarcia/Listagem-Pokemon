import './App.css';
import { GlobalStyle } from './app-globalStyle';
import { ThemeProvider } from './componentes/contexts/theme-context';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <>
      <ThemeProvider>
        
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider >

    </>
  );
}

export default App;
