import { ComponentStory, ComponentMeta } from '@storybook/react';
import DetailsPage from './DetailsPage';

export default {
  title: 'interac-etransfer/send-money/components/DetailsPage',
  component: DetailsPage,
} as ComponentMeta<typeof DetailsPage>;

const Template: ComponentStory<typeof DetailsPage> = () => (
  <DetailsPage setCurrentStep={() => {}} setRealStep={() => {}} />
);

export const Default = Template.bind({});
Default.args = {};
