export default function Alert(props:any) {
  const { AlertMsg } = props;
  return (
    <span className="alertMsg">
      <i className="zippy-cash-icon zc-alert" />
      {AlertMsg}
      <i className="zippy-cash-icon zc-close" />
    </span>
  );
}
