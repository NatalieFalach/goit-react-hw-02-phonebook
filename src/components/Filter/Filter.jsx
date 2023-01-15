import PropTypes from 'prop-types';
import styles from './Filter.module.css'

const Filter = ({ onFilterChange }) => {
  return (
    <>
      <p className={styles.p}>Find contacts by name</p>
      <input className={styles.inputText}type="text" onChange={onFilterChange}/>
    </>
  )
}
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}
export default Filter;