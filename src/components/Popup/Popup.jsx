import "./Popup.scss";


function Popup({ popUpText, setOpenPop }) {

    return (
       <div className="popup">
            <div className="close" onClick={() => {
                    setOpenPop({add: false,
                        required: false});
                }}>
                <span></span>
                <span></span>
            </div>
            <p>{popUpText}</p>
            <div className="open-button">
                <button className="button" name="yes" type="button" onClick={() => {
                    setOpenPop(false);
                }}>OK</button>
            </div>
        </div>
    )
}

export default Popup;