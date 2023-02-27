const Alert = (props) => {
    return (
        <>
            <div className="alert-container">
                <div className="alert-content">
                    <div className="alert-header">
                        <b>Oh snap! You got an error!</b>
                    </div>
                    <span className="alert-body">{props.children}</span>
                </div>
            </div>
        </>
    )
}

export default Alert;