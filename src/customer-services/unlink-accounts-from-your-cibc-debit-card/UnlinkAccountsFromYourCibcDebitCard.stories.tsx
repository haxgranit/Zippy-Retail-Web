import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import UnlinkAccountsFromYourCibcDebitCard from './UnlinkAccountsFromYourCibcDebitCard';

export default {
  title:
    'customer-services/unlink-accounts-from-your-cibc-debit-card/UnlinkAccountsFromYourCibcDebitCard',
  component: UnlinkAccountsFromYourCibcDebitCard,
} as ComponentMeta<typeof UnlinkAccountsFromYourCibcDebitCard>;

const Template: ComponentStory<
  typeof UnlinkAccountsFromYourCibcDebitCard
> = () => <UnlinkAccountsFromYourCibcDebitCard />;

export const Default = Template.bind({});
Default.args = {};
