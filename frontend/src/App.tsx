import { GlobalStyle } from './styles/GlobalStyle';
import { Reset } from './styles/Reset';
import { RoutesMain } from './routes';
import MainProvider from './providers/MainProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <MainProvider>
      <ToastContainer
        position='top-right'
        autoClose={3000}
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
