function foo() {
  return true;
}

var Hello = React.createClass({
  componentWillMount: foo,
  componentDidMount: foo,
  componentWillUnmount: foo,
  componentWillReceiveProps: foo,
  componentWillUpdate: foo,
  componentDidUpdate: foo
});
