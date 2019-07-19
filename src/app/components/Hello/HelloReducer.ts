import {
  HelloActionTypes,
  HelloState,
  CHANGE_BUNDLER,
  CHANGE_COMPILER,
  CHANGE_FRAMEWORK
} from './HelloTypes';

const initialState: HelloState = {
  framework: 'React',
  compiler: 'TypeScript',
  bundler: 'Webpack'
};

export function helloReducer(
  state = initialState,
  action: HelloActionTypes
): HelloState {
  switch (action.type) {
    case CHANGE_BUNDLER:
      return {
        ...state,
        framework: action.payload
      };
    case CHANGE_COMPILER: {
      return {
        ...state,
        compiler: action.payload
      };
    }
    case CHANGE_FRAMEWORK: {
      return {
        ...state,
        framework: action.payload
      };
    }
    default:
      return state;
  }
}
