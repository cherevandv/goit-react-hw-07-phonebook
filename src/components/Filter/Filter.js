import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import { getFilter } from '../../redux/selectors';
import './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        placeholder="..."
        value={value}
        onChange={e => dispatch(actions.filter(e.currentTarget.value))}
      ></input>
    </label>
  );
}
