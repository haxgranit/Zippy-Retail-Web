import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import ViewEStatements from './ViewEStatements';

export default {
  title: 'ViewEstatements',
  component: ViewEStatements,
} as ComponentMeta<typeof ViewEStatements>;

const Template: ComponentStory<typeof ViewEStatements> = () => <ViewEStatements />;

export const Default = Template.bind({});
Default.args = {};
