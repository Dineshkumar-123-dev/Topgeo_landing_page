function Toast({ show, message }) {
    return (
        <div className={`toast ${show ? "toast-show" : ""}`}>
            {message}
        </div>
    );
}

export default Toast;