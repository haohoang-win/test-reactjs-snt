import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAnimalById } from "../service.js/animalService";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { logoutRedux } from "../redux/slices/userSlice";

const DetailAnimal = (props) => {
    const [dataAnimal, setDataAnimal] = useState({});
    const [publishedAt, setPudlishedAt] = useState()

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const pathName = location.pathname;
        let pathId = pathName.split('l/')[1];
        pathId = +pathId;
        fetchAnimalById(pathId)
    }, [])

    const fetchAnimalById = async (id) => {
        let res = await getAnimalById(id)
        console.log(res);
        if (res && res.animal) {
            let publishData = new Date(res.animal.published_at)
            setDataAnimal(res.animal)
            setPudlishedAt(publishData.getDate() + '/' + (publishData.getMonth() + 1) + '/' + publishData.getFullYear())
        } else if (res && res.status) {
            toast.error(res.detail)
            if (res.status === 401) {
                navigate('/')
                localStorage.clear('access_token')
                localStorage.clear('expires_in')
                dispatch(logoutRedux())
            }
        }
    }

    return (<>
        <div className="detailanimal-container">
            <div className="title">Detail Animal</div>
            {dataAnimal && dataAnimal.id ?
                <>
                    <div className="animal-attributes">Id: <span>{dataAnimal.id}</span></div>
                    <div className="animal-attributes">Name: <span>{dataAnimal.name}</span></div>
                    <div className="animal-attributes">Gender: <span>{dataAnimal.gender}</span></div>
                    <div className="animal-attributes">Age: <span>{dataAnimal.age}</span></div>
                    <div className="animal-attributes">Description: <span>{dataAnimal.description}</span></div>
                    <div className="animal-attributes">Size: <span>{dataAnimal.size}</span></div>
                    <div className="animal-attributes">Type: <span>{dataAnimal.type}</span></div>
                    <div className="animal-attributes">Species: <span>{dataAnimal.species}</span></div>
                    <div className="animal-attributes">Status: <span>{dataAnimal.status}</span></div>
                    <div className="animal-attributes">Published at: <span>{publishedAt}</span></div>
                    {dataAnimal.photos.length > 0 &&
                        <>
                            <div className="animal-image">
                                Image:
                            </div>
                            <div className="img-animal">
                                <img src={dataAnimal.photos[0].small} alt="Paris" width="300" height="300"></img>
                            </div>
                        </>
                    }
                </>
                :
                <div className="icon-container">< AiOutlineLoading3Quarters className='loader-animal-icon' /></div>
            }
        </div>
    </>)
}

export default DetailAnimal;