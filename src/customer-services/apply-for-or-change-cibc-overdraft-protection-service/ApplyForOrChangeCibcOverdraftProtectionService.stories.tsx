import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../index.css';
import ApplyForOrChangeCibcOverdraftProtectionService from './ApplyForOrChangeCibcOverdraftProtectionService';

export default {
  title: 'customer-services/apply-for-or-change-cibc-overdraft-protection-service/ApplyForOrChangeCibcOverdraftProtectionService',
  component: ApplyForOrChangeCibcOverdraftProtectionService,
} as ComponentMeta<typeof ApplyForOrChangeCibcOverdraftProtectionService>;

const Template: ComponentStory<typeof ApplyForOrChangeCibcOverdraftProtectionService> = () => <ApplyForOrChangeCibcOverdraftProtectionService />;

export const Default = Template.bind({});
Default.args = {};
