import {
  HelloActionTypes,
  HelloState,
  CHANGE_BUNDLER,
  CHANGE_COMPILER,
  CHANGE_FRAMEWORK
} from './HelloTypes';

export function changeFramework(
  newFramework: HelloState['framework']
): HelloActionTypes {
  return {
    type: CHANGE_FRAMEWORK,
    payload: newFramework
  };
}

export function changeBundler(
  newBundler: HelloState['bundler']
): HelloActionTypes {
  return {
    type: CHANGE_BUNDLER,
    payload: newBundler
  };
}

export function changeCompiler(
  newCompiler: HelloState['compiler']
): HelloActionTypes {
  return {
    type: CHANGE_COMPILER,
    payload: newCompiler
  };
}
