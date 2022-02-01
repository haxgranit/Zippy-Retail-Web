import PropTypes from 'prop-types';
import CommonHeader from './CommonHeader';
import Footer from '../footer/Footer';

function ContactSelector({
  contactLists,
  // selectedContact,
  // setSelectedContact,
}: {
  contactList: string;
  selectedContact: string;
  setSelectedContact: string;
}) {
  return (
    <>
      <CommonHeader title={contactLists} />
      <div className="content-wrapper">
      </div>
      <Footer />
    </>
  );
}

ContactSelector.propTypes = {
  title: PropTypes.string,
  contactList: PropTypes.string;
  selectedContact: PropTypes.string;
  setSelectedContact: PropTypes.string;
};

ContactSelector.defaultProps = {
  title: '',
  contactList: '',
  selectedContact: '',
  setSelectedContact: '',
};

export default ContactSelector;
