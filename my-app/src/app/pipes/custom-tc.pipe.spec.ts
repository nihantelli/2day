import { CustomTcPipe } from './custom-tc.pipe';

describe('CustomTcPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTcPipe();
    expect(pipe).toBeTruthy();
  });
});
