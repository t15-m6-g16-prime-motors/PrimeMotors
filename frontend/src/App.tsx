import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/GlobalStyle';
import { Reset } from './styles/Reset';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';
import MainProvider from './providers/MainProvider';

const App = () => {
  return (
    <MainProvider>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Reset />
      <GlobalStyle />
      <RoutesMain />
    </MainProvider>
  );
};

export default App;
