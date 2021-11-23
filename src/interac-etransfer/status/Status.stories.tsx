import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import Status from './Status';

export default {
  title: 'interac-etransfer/status/Status',
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = () => <Status />;

export const Default = Template.bind({});
Default.args = {};
