import { Routes, Route } from 'react-router-dom'
import DetailAnimal from '../components/DetailAnimal';
import Home from '../components/Home';
import ListAnimal from '../components/ListAnimal';
import PrivateRoute from './PrivateRoutes';
import NotFound from './NotFound';

const AppRoutes = () => {
    return (
        <>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/animals'
                        element={
                            <PrivateRoute>
                                <ListAnimal />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/animal/:id'
                        element={
                            <PrivateRoute>
                                <DetailAnimal />
                            </PrivateRoute>
                        }
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default AppRoutes