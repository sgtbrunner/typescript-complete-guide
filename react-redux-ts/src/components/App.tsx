import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchToDos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchToDos: () => Promise<void>;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  onButtonClick = (): void => {
    this.setState({ fetching: true });
    this.props.fetchToDos().finally(() => this.setState({ fetching: false }));
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
        {todo.title}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const mapDispatchToProps = { fetchToDos, deleteTodo };

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
