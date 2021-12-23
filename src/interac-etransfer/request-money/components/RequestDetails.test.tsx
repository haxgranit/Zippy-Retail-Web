import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { formatContactName } from '../../../Helpers';
import ACCOUNTS from '../../../stories/Accounts';
import CONTACTS from '../../../stories/Contacts';
import { RequestDetailPure } from './RequestDetails';

const mockSetCurrentStep = jest.fn();

const component = (
  <BrowserRouter>
    <RequestDetailPure
      accountsData={ACCOUNTS}
      contacts={CONTACTS}
      setCurrentStep={mockSetCurrentStep}
    />
  </BrowserRouter>
);
const componentWithoutData = (
  <BrowserRouter>
    <RequestDetailPure
      accountsData={null}
      contacts={null}
      setCurrentStep={mockSetCurrentStep}
    />
  </BrowserRouter>
);

beforeEach(cleanup);

describe('RequestDetail Component', () => {
  it('should render RequestDetail', () => {
    render(component);
    const title = screen.getByText('Request Money Details');
    expect(title).toBeInTheDocument();
  });
  it('should not  render any form in beginging ', () => {
    render(component);
    expect(screen.queryAllByText('Notify By:')).toHaveLength(0);
  });
  it('should render Email Form  when user Has an Email ', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
    expect(screen.getByText('Notify By:')).toBeInTheDocument();
  });
  it('should render Text Form  when user Has a Phone ', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
    expect(screen.getByText('Text Message')).toBeInTheDocument();
  });
  it('should render accountFrom with null when no there is no contact ', () => {
    render(componentWithoutData);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['']);
    expect(requestMoneyFrom[0].textContent).toEqual('Select');
  });
  it('should render accountFrom with contact when  chossing  a contact ', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['2']);
    const fullName = formatContactName(
      CONTACTS[2].firstName,
      CONTACTS[2].lastName,
    );
    expect(requestMoneyFrom[0].textContent).toContain(fullName);
  });
  it('should click next step button', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
    screen.getAllByRole('button')[1].click();
    expect(mockSetCurrentStep).toHaveBeenCalled();
  });
  it('should render select with Contact Details', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
    expect(requestMoneyFrom[0].children.length).toEqual(6);
  });
  it('should only render the default select when Contact is null', () => {
    render(componentWithoutData);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['']);
    expect(requestMoneyFrom[0].children.length).toEqual(1);
  });
});
