import css from './Filter.module.css';

export const Filter = ({ handleFilter, value }) => {
  return (
    <div className={css.wrap}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={handleFilter} />
    </div>
  );
};
