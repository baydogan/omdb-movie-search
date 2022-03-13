import { AiOutlineSearch } from "react-icons/ai";

const Searchbox = () => {
  return (
    <div className="search-box">
      <AiOutlineSearch className="search-icon" />
      <input placeholder="search" type="search" />
    </div>
  );
};

export default Searchbox;
