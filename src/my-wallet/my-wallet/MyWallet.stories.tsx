import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../styles/index.scss';
import { MyWalletPure } from './MyWallet';

export default {
  title: 'my-wallet/my-wallet/MyWallet',
  component: MyWalletPure,
} as ComponentMeta<typeof MyWalletPure>;

const Template: ComponentStory<typeof MyWalletPure> = ({ account }) => (
  <MyWalletPure account={account} />
);

export const Loaded = Template.bind({});
Loaded.args = {
  account: { id: 1, name: '8000 001 000000000', balance: 1000 },
};

export const Loading = Template.bind({});
Loading.args = {};
