import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import RequestMoney from './RequestMoney';

export default {
  title: 'interac-etransfer/request-money/RequestMoney',
  component: RequestMoney,
} as ComponentMeta<typeof RequestMoney>;

const Template: ComponentStory<typeof RequestMoney> = () => <RequestMoney />;
export const Default = Template.bind({});
Default.args = {};
