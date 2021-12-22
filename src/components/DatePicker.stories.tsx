import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => <DatePicker />;

export const Default = Template.bind({});
Default.args = {};
