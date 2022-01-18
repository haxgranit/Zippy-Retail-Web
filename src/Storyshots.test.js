import initStoryshots, { multiSnapshotWithOptions, Stories2SnapsConverter} from '@storybook/addon-storyshots';
import path from 'path';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '../.storybook'),
  integrityOptions: { cwd: path.join(__dirname, 'src', 'stories') },
  test: multiSnapshotWithOptions({}),
  renderer: mount,
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: './__snapshots__',
    snapshotExtension: '.storyshot',
    storiesExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
});
