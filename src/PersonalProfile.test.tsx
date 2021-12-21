import { render, fireEvent } from './test-utils';

import PersonalProfile from './PersonalProfile';

describe('PersonalProfile Component', () => {
  it('click a links on PersonalProfile', () => {
    const { container } = render(<PersonalProfile />);
    fireEvent.click(container.querySelectorAll('.link-item')[0]);
    fireEvent.click(container.querySelectorAll('.link-item')[1]);
    fireEvent.click(container.querySelectorAll('.link-item')[2]);
    fireEvent.click(container.querySelectorAll('.link-item')[3]);
  });
});
