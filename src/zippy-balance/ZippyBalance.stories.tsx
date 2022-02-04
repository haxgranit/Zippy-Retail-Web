import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import { ZippyBalancePure } from './ZippyBalance';

export default {
  title: 'ZippyBalance',
  component: ZippyBalancePure,
} as ComponentMeta<typeof ZippyBalancePure>;

const Template: ComponentStory<typeof ZippyBalancePure> = ({ balance }) => (
  <ZippyBalancePure balance={balance} />
);

export const Loaded = Template.bind({});
Loaded.args = { balance: 1000 };

export const Loading = Template.bind({});
Loading.args = {};
