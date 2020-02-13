import React from "react";
import PropTypes from "prop-types";

export class Foo extends React.Component {
  static propTypes = {
    foo: PropTypes.string.isRequired
  }
}
