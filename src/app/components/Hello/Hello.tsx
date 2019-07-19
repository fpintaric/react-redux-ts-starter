import * as React from 'react';
import { AppState } from '../../store/store';
import { HelloState } from './HelloTypes';
import { connect } from 'react-redux';

const Hello: React.FunctionComponent<HelloState> = ({
  compiler,
  framework,
  bundler
}) => {
  return (
    <h1>
      This is a {framework} app using {compiler} bundled with {bundler}
    </h1>
  );
};

const mapStatetoProps = (state: AppState) => ({
  framework: state.hello.framework,
  bundler: state.hello.bundler,
  compiler: state.hello.compiler
});

export default connect(mapStatetoProps)(Hello);
