import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import RemoveAssociationToOnlineInvestmentAccount from './RemoveAssociationToOnlineInvestmentAccount';

export default {
  title: 'customer-services/remove-association-to-online-investment-account/RemoveAssociationToOnlineInvestmentAccount',
  component: RemoveAssociationToOnlineInvestmentAccount,
} as ComponentMeta<typeof RemoveAssociationToOnlineInvestmentAccount>;

const Template: ComponentStory<typeof RemoveAssociationToOnlineInvestmentAccount> = () => (
  <RemoveAssociationToOnlineInvestmentAccount />
);

export const Default = Template.bind({});
Default.args = {};
