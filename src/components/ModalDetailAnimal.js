import { useEffect, useState } from "react";

const ModalDetailAnimal = (props) => {
    const { show, handleCloseModal, dataAnimal } = props;

    const [hideModal, setHideModal] = useState(false)
    const [notHide, setNotHide] = useState(false)
    const [publishedAt, setPudlishedAt] = useState()

    useEffect(() => {
        if (typeof show === 'boolean') {
            if (!show) {
                setNotHide(false)
                setHideModal(true)
                setTimeout(() => {
                    setHideModal(false)
                }, 300);
            } else {
                setNotHide(true)
            }
        }
    }, [show])

    useEffect(() => {
        if (dataAnimal.id) {
            let publishData = new Date(dataAnimal.published_at)
            setPudlishedAt(publishData.getDate() + '/' + (publishData.getMonth() + 1) + '/' + publishData.getFullYear())
        }
    }, [dataAnimal])

    return (
        <>
            <div className={`${show ? "modaldetailanimal-container show-modal" : "modaldetailanimal-container"} ${hideModal ? 'hide-modal' : ''} ${typeof show === 'boolean' && !hideModal && notHide ? 'not-hide' : ''}`}>
                <div className="content">
                    <div className="header">
                        <span className="title">Detail Animal</span>
                        <span className="btn-close" onClick={() => handleCloseModal()}>X</span>
                    </div>
                    <hr className="hr-modal" />
                    <div className="body">
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
                    </div>
                    <hr className="hr-modal" />
                    <div className="footer">
                        <span className="btn-close" onClick={() => handleCloseModal()}>Close</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDetailAnimal;