import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import { ViewBalancePure } from './ViewBalance';

export default {
  title: 'my-accounts/view-balance/ViewBalance',
  component: ViewBalancePure,
} as ComponentMeta<typeof ViewBalancePure>;

const Template: ComponentStory<typeof ViewBalancePure> = ({ balance }) => <ViewBalancePure balance={balance} />;

export const Loaded = Template.bind({});
Loaded.args = { balance: 1000 };

export const Loading = Template.bind({});
Loading.args = {};
