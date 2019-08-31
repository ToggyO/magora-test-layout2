import React from 'react';


/* eslint-disable class-methods-use-this */
export const errorWrapper = (WrappedComponent) => (
  class extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     isOpen: false,
    //   };
    // }

    render() {
      debugger;
      return <WrappedComponent {...this.props} />;
    }
  }
);
