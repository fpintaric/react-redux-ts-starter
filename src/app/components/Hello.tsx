import * as React from 'react';
interface ExampleInterface {
  compiler: string;
  framework: string;
  bundler: string;
}

const Hello: React.FunctionComponent<ExampleInterface> = ({
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

export default Hello;
