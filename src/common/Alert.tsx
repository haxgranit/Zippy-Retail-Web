import AlertIcon from '../assets/img/icons/alert.svg';
import CloseIcon from '../assets/img/icons/Close.svg';

export default function Alert(props:any) {
  const { AlertMsg } = props;
  return (
    <span className="alertMsg">
      <img src={AlertIcon} alt="Alert Icon" style={{ marginRight: '4px' }} />
      {AlertMsg}
      <img src={CloseIcon} alt="Alert Icon" style={{ marginLeft: '16px' }} />
    </span>
  );
}
