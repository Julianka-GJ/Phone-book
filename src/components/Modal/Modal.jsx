import "./Modal.scss";


function Modal({ openModal, modalText, setOpenModal, removeContact, idContact }) {
    if (!openModal) return null;

    return (
        <div className="modal">
            <div className="close" onClick={() => {
                    setOpenModal(false);
                }}>
                <span></span>
                <span></span>
            </div>
            <p>{modalText}</p>
            <div className="modal-button">
                <button className="button" name="yes" type="button" onClick={removeContact} id={idContact}>Yes</button>
                <button className="button" name="no" onClick={() => {
                    setOpenModal(false);
                }}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal;