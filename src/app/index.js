
var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({

  getInitialState: function() {
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap']
    }
  },

  render: function() {
    return(
      <div>
        <p>Crap I need to do...</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );
  } // render
});


// Put component into html page
ReactDOM.render(<TodoComponent mssg="Hey guys!"/>, document.getElementById('todo-wrapper'));
