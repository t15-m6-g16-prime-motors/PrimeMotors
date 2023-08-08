import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/GlobalStyle';
import { Reset } from './styles/Reset';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from './routes';

const App = () => {
  return (
    <>
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
      <RoutesMain/>
    </>
  );
};

export default App;
