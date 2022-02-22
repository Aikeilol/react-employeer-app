import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className="btn-group" >
        <button
          className="btn btn-light"
          type="button">
          Все сотрудники
        </button>
        <button
          className="btn btn-outline-light"
          type="button">
          На повышение
        </button>
        <button
          className="btn btn-outline-light"
          type="button">
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;