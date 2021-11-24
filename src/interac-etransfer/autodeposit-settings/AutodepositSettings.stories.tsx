import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import AutodepositSettings from './AutodepositSettings';

export default {
  title: 'interac-etransfer/autodeposit-settings/AutodepositSettings',
  component: AutodepositSettings,
} as ComponentMeta<typeof AutodepositSettings>;

const Template: ComponentStory<typeof AutodepositSettings> = () => <AutodepositSettings />;
export const Default = Template.bind({});
Default.args = {};
