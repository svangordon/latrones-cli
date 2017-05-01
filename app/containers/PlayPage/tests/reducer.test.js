
import { fromJS } from 'immutable';
import playPageReducer from '../reducer';

describe('playPageReducer', () => {
  it('returns the initial state', () => {
    expect(playPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
