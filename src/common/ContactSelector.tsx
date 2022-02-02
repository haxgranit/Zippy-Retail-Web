import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Contact } from '../api';
import { ContactTypeEnum } from '../constants/enum/ContactTypeEnum';
import { formatContactName } from '../Helpers';

function ContactSelector({
  contactList,
  selectedContact,
  setSelectedContact,
}: {
  contactList: Array<Contact>;
  selectedContact: Contact;
  setSelectedContact: Dispatch<SetStateAction<Contact>>;
}) {
  const [contactType, setContactType] = useState<ContactTypeEnum>(ContactTypeEnum.PERSONAL);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [filteredContactList, setFilteredContactList] = useState<Array<Contact>>(contactList);
  const [searchValue, setSearchValue] = useState<string>('');
  const [initialized, setInitialized] = useState<boolean>(false);
  const [showContactList, setShowContactList] = useState<boolean>(false);

  const filter = (value: string) => {
    setSearchValue(value);
    setFilteredContactList(contactList.filter((contactItem) => {
      const search = value.toLowerCase();
      return contactItem?.firstName?.toLowerCase().includes(search)
        || contactItem?.lastName?.toLowerCase().includes(search)
        || contactItem?.email?.toLowerCase().includes(search);
    }));
  };

  useEffect(() => {
    if (!initialized && contactList.length) {
      setInitialized(true);
      setIsProcessing(false);
      filter('');
    }
  });

  return (
    <>
      <div className="contact-selector">
        <div className="contact-identifier">
          <FormControl
            placeholder="Enter @ZippyUsername or Email"
            value={selectedContact?.email}
            onChange={() => false}
          />
          <Button
            className={`btn-select-contact btn-transparent${selectedContact?.email ? ' active' : ''}`}
            type="button"
            onClick={() => {
              if (selectedContact?.email) {
                setSelectedContact({
                  id: null,
                  email: '',
                  firstName: '',
                  lastName: '',
                  phone: '',
                } as unknown as Contact);
              } else {
                setShowContactList(true);
              }
            }}
          >
            <i className="zippy-cash-icon zc-add" />
          </Button>
        </div>

        <div className="contact-list-wrap">
          {showContactList
            && (
              <div className="contact-list">
                <div className="zippy-btn-group btn-group" role="group" aria-label="Zippy Cash">
                  <Button
                    className={contactType === ContactTypeEnum.PERSONAL ? 'active' : ''}
                    onClick={() => setContactType(ContactTypeEnum.PERSONAL)}
                    disabled={contactType === ContactTypeEnum.PERSONAL}
                  >
                    Personal
                  </Button>
                  <Button
                    className={contactType === ContactTypeEnum.BUSINESS ? 'active' : ''}
                    onClick={() => setContactType(ContactTypeEnum.BUSINESS)}
                    disabled={contactType === ContactTypeEnum.BUSINESS}
                  >
                    Business
                  </Button>
                </div>
                <div className="contact-search">
                  <i className="zippy-cash-icon zc-search" />
                  <FormControl
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(evt) => filter(evt.target.value)}
                  />
                </div>
                <div className="contact-list-container">
                  {filteredContactList.length > 0
                  && (
                    <div className="personal-contacts">
                      <h4>Contacts</h4>
                      {filteredContactList?.map((item: Contact) => (
                        <div className={`contact-item${selectedContact.id === item.id ? ' selected' : ''}`} key={item.id}>
                          <div className="contact-name">
                            {formatContactName(item.firstName, item.lastName)}
                          </div>
                          <button
                            className="btn-select-contact btn-transparent"
                            type="button"
                            onClick={() => {
                              if (item.email) {
                                setSelectedContact(item);
                                setShowContactList(false);
                              }
                            }}
                          >
                            <i className="zippy-cash-icon zc-personal" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {!initialized && filteredContactList.length === 0 && searchValue === '' && (
                    <div>Loading...</div>
                  )}
                  {initialized && filteredContactList.length === 0 && searchValue !== '' && (
                    <div>No match</div>
                  )}
                  {initialized && filteredContactList.length === 0 && searchValue === '' && (
                    <div>No contacts</div>
                  )}
                </div>
                <div className="action">
                  <Button
                    className="zippy-btn"
                    disabled={isProcessing}
                    onClick={() => false}
                  >
                    {isProcessing && <div className="loading spinner-border" role="status" />}
                    Add Contact
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
}

ContactSelector.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  selectedContact: PropTypes.objectOf(PropTypes.any),
  setSelectedContact: PropTypes.func,
};

ContactSelector.defaultProps = {
  contactList: [],
  selectedContact: {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  setSelectedContact: undefined,
};

export default ContactSelector;
