import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import AutoDeposit from './AutoDeposit';

export default {
  title: 'my-wallet/auto-deposit/AutoDeposit',
  component: AutoDeposit,
} as ComponentMeta<typeof AutoDeposit>;

const Template: ComponentStory<typeof AutoDeposit> = () => <AutoDeposit />;

export const Default = Template.bind({});
