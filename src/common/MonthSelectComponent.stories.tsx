import { ComponentStory, ComponentMeta } from '@storybook/react';
import MonthSelectComponent from './MonthSelectComponent';

export default {
  title: 'common/MonthSelectComponent',
  component: MonthSelectComponent,
} as ComponentMeta<typeof MonthSelectComponent>;

const Template: ComponentStory<typeof MonthSelectComponent> = () => (
  <MonthSelectComponent />
);

export const Default = Template.bind({});
Default.args = {};
