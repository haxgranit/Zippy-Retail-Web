import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
  title: 'components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = ({
  months,
  days,
  years,
}) => <DatePicker months={months} years={years} days={days} />;

export const Default = Template.bind({});
Default.args = {
  months: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12],
  days: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12],
  years: [2021, 2022],
};

export const Empty = Template.bind({});
Empty.args = {};
