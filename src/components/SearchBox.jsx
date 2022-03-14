import { AiOutlineSearch } from "react-icons/ai";

const Searchbox = ({ search, handleChange }) => {
  return (
    <div className="search-box">
      <AiOutlineSearch className="search-icon" />
      <input placeholder="search" type="search" value={search} onChange={handleChange} />
    </div>
  );
};

export default Searchbox;
