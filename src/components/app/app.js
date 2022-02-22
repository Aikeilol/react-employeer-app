import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1, },
        { name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2, },
        { name: 'Michael J.', salary: 5000, increase: true, rise: false, id: 3, },
      ],
      term: '',
    };
    this.maxId = 4;
  }

  addItem = (name, salary) => {
    this.setState(({ data }) => {
      return { data: [...data, { name, salary, increase: false, id: this.maxId++ }] }
    })
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter(item => item.id !== id) }
    })
  }

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item;
      })
    }))
  }

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, rise: !item.rise }
        }
        return item;
      })
    }))
  }

  searchEmp = (data, term) => {
    if (term.length === 0) {
      return data;
    } else {
      return data.filter(item => item.name.indexOf(term) > -1)
    }
  }

  onSearch = (term) => {
    this.setState({ term })
  }

  render() {
    const visibleData = this.searchEmp(this.state.data, this.state.term)
    return (
      <div className="app">
        <AppInfo
          data={this.state.data} />
        <div className="search-panel">
          <SearchPanel
            onSearch={this.onSearch}
          />
          <AppFilter />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }
}

export default App;