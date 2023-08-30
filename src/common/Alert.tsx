export default function Alert(props:any) {
  const { AlertMsg, onClose } = props;
  return (
    <span className="alert-message-container">
      <div className="icon-left">
        <i className="zippy-cash-icon zc-warning" />
      </div>
      <div className="alert-message">
        {AlertMsg}
      </div>
      <div className="icon-right">
        <i
          role="button"
          tabIndex={0}
          aria-label="close"
          className="zippy-cash-icon zc-close"
          onKeyDown={() => { }}
          onClick={() => {
            onClose?.();
          }}
        />
      </div>
    </span>
  );
}
