import { render } from '@testing-library/react';

import Title from './title';

describe('Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Title title="test" year={2022} />);
    expect(baseElement).toBeTruthy();
  });
});
