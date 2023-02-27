import { useEffect, useState } from "react"
import { getAllAnimal } from "../service.js/animalService"
import ReactPaginate from 'react-paginate';
import './pagination.css'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { logoutRedux } from "../redux/slices/userSlice";
import ModalDetailAnimal from "./ModalDetailAnimal";

const ListAnimal = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [curPage, setCurPage] = useState(1)
    const [totalPage, setTotalPage] = useState();
    const [dataAllAnimal, setDataAllAnimal] = useState([]);
    const [dataAnimal, setDataAnimal] = useState({});
    const [showModal, setShowModal] = useState()

    useEffect(() => {
        if (curPage) {
            fetchListAnimals(curPage)
        }
    }, [curPage])

    const fetchListAnimals = async (page) => {
        let res = await getAllAnimal(page);
        if (res && res.animals && res.pagination) {
            setTotalPage(res.pagination.total_pages)
            setDataAllAnimal(res.animals)
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

    const handlePageClick = (event) => {
        setCurPage(+event.selected + 1);
        setDataAllAnimal([])
    }

    const handleShowModal = (animal) => {
        setDataAnimal(animal);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className="listanimal-container">
                <div className="title">
                    List Animal
                </div>
                <div className="table-animal">
                    <div className="paginate-container">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={totalPage}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </div>
                    <div className="table-container">
                        <table>
                            {dataAllAnimal.length > 0 &&
                                <tr >
                                    <th>Number</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>View</th>
                                </tr>
                            }
                            {dataAllAnimal.length > 0 &&
                                dataAllAnimal.map((item, index) => (
                                    <tr key={`animal-${item.id}-${index}`}>
                                        <td>{(curPage - 1) * 20 + index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>
                                            <span className="btn-detail" onClick={() => handleShowModal(item)}>Detail</span>
                                            {/* <a href={`/animal/${item.id}`} target='_blank' className="btn-detail">Detail</a> */}
                                            {item.photos && item.photos.length > 0 &&
                                                <a href={item.photos[0].full} target='_blank' className="btn-image">Image</a>
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                        {dataAllAnimal.length === 0 &&
                            <div className="icon-container">< AiOutlineLoading3Quarters className='loader-animal-icon' /></div>
                        }
                    </div>
                </div>
            </div>
            <ModalDetailAnimal
                show={showModal}
                handleCloseModal={handleCloseModal}
                dataAnimal={dataAnimal}
            />
        </>
    )
}

export default ListAnimal