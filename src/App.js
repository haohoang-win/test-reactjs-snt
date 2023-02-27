import './App.scss';
import Header from './components/Header';
import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { loginRedux } from './redux/slices/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('access_token') && localStorage.getItem('expires_in')) {
      let expireDate = localStorage.getItem('expires_in');
      let dateNow = new Date().getTime()
      if (+expireDate < +dateNow) {
        toast.error('Access token invalid or expired')
        navigate('/')
        localStorage.clear('access_token')
        localStorage.clear('expires_in')
      } else {
        dispatch(loginRedux())
      }
    } else {
      localStorage.clear('access_token')
      localStorage.clear('expires_in')
    }
  }, [])

  return (
    <>
      <div className='app-container'>
        <Header />
        <AppRoutes />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
