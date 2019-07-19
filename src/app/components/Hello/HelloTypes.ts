export interface HelloState {
  compiler: string;
  framework: string;
  bundler: string;
}

export const CHANGE_FRAMEWORK = 'CHANGE_FRAMEWORK';
export const CHANGE_COMPILER = 'CHANGE_COMPILER';
export const CHANGE_BUNDLER = 'CHANGE_BUNDLER';

interface ChangeFrameworkAction {
  type: typeof CHANGE_FRAMEWORK;
  payload: HelloState['framework'];
}

interface ChangeCompilerAction {
  type: typeof CHANGE_COMPILER;
  payload: HelloState['compiler'];
}

interface ChangeBundlerAction {
  type: typeof CHANGE_BUNDLER;
  payload: HelloState['bundler'];
}

export type HelloActionTypes =
  | ChangeBundlerAction
  | ChangeCompilerAction
  | ChangeFrameworkAction;
