// Import icons
import { AiOutlineSearch } from "react-icons/ai";
// Import styles
import './SearchInput.css';

const SearchInput = ({ value, onChange }) => (
  <div className="search-input">
    <input value={value} onChange={({ target }) => onChange(target.value)}/>
    <AiOutlineSearch />
  </div>
)

export default SearchInput;