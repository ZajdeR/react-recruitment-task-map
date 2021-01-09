import BaseLayout from './layouts/BaseLayout';
import Main from './pages/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BaseLayout>
      <Main />
      <ToastContainer />
    </BaseLayout>
  );
}

export default App;
