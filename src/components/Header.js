import { useLocation, useNavigate } from 'react-router-dom'
import { Login } from '../service.js/animalService';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginRedux, logoutRedux, unLoadingRedux, loadingRedux } from '../redux/slices/userSlice';
import { ImSpinner10 } from 'react-icons/im'

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    let isLoading = useSelector(state => state.user.isLoading)
    let isAuthenticated = useSelector(state => state.user.isAuthenticated)

    const handleLogin = async () => {
        dispatch(loadingRedux())
        let res = await Login();
        if (res && res.token_type === "Bearer" && res.access_token && res.expires_in) {
            const timeNow = new Date().getTime();
            let countTime = +timeNow + res.expires_in * 1000;
            localStorage.setItem('access_token', res.access_token);
            localStorage.setItem('expires_in', countTime);
            toast.success('Login Success.')
            dispatch(loginRedux())
        } else if (res && res.status) {
            toast.error(res.title)
        }
        dispatch(unLoadingRedux())
    }

    const handleLogout = () => {
        localStorage.clear('access_token')
        localStorage.clear('expires_in')
        dispatch(logoutRedux())
    }

    return (
        <div className='header-container'>
            <div className='header-content'>
                <ul>
                    <li><span onClick={() => navigate('/')} className={location.pathname === '/' ? 'active' : ''}>Home</span></li>
                    <li><span onClick={() => navigate('/animals')} className={location.pathname === '/animals' ? 'active' : ''}>List animal</span></li>
                    <li className='login-btn'>
                        {isLoading && !isAuthenticated && <span className='not-highlight'><ImSpinner10 className='loader-icon' />Logging</span>}
                        {!isLoading && !isAuthenticated && <span onClick={handleLogin}>Login</span>}
                        {!isLoading && isAuthenticated && <span onClick={handleLogout}>Logout</span>}
                    </li>
                    {!isLoading && isAuthenticated && <li className='isLogin'><span className='not-highlight hide'>Welcome!!!</span></li>}
                </ul>
            </div>
        </div>
    )
}

export default Header;