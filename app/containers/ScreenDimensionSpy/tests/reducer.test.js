
import { fromJS } from 'immutable';
import screenDimensionSpyReducer from '../reducer';

describe('screenDimensionSpyReducer', () => {
  it('returns the initial state', () => {
    expect(screenDimensionSpyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
