import './app-filter.css';

const AppFilter = ({ onFilter, filter }) => {

  const className1 = filter === 'all' ? "btn btn-light" : "btn btn-outline-light";
  const className2 = filter === 'rise' ? "btn btn-light" : "btn btn-outline-light";
  const className3 = filter === 'moreThen1000' ? "btn btn-light" : "btn btn-outline-light";

  return (
    <div className="btn-group" >
      <button
        className={className1}
        type="button"
        onClick={() => onFilter('all')}>
        Все сотрудники
      </button>
      <button
        className={className2}
        type="button"
        onClick={() => onFilter('rise')}
      >
        На повышение
      </button>
      <button
        className={className3}
        type="button"
        onClick={() => onFilter('moreThen1000')}>
        З/П больше 1000$
      </button>
    </div>
  );
}


export default AppFilter;