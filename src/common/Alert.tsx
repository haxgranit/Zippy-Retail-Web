export default function Alert(props:any) {
  const { AlertMsg, onClose } = props;
  return (
    <span className="alertMsg">
      <i className="zippy-cash-icon zc-alert" />
      {AlertMsg}
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
    </span>
  );
}
