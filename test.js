function foo() {
  return true;
}

var Hello = React.createClass({
  componentWillMount: foo,
  componentDidMount: foo,
  componentWillReceiveProps: foo,
  componentWillUpdate: foo,
  componentDidUpdate: foo,
  componentWillUnmount: foo
});
