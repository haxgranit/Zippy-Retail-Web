import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import SignupForClickToPay from './SignupForClickToPay';

export default {
  title: 'customer-services/signup-for-click-to-pay/SignupForClickToPay',
  component: SignupForClickToPay,
} as ComponentMeta<typeof SignupForClickToPay>;

const Template: ComponentStory<typeof SignupForClickToPay> = () => (
  <SignupForClickToPay />
);

export const Default = Template.bind({});
Default.args = {};
