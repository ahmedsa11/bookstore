import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSuitcase} from "@fortawesome/free-solid-svg-icons";
function Search() {
  return (
    <>
    <form className="sub-box text-center">
      <FontAwesomeIcon icon={faSearch} />
      <input
        className="ipt"
        type="text"
        placeholder="search our store"
      />
      <FontAwesomeIcon icon={faSuitcase} />
    </form>
    </>
  );
}
export default Search;
