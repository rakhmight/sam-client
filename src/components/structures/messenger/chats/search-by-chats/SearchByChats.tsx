import BlockBtn from "./block-btn/BlockBtn";
import SearchInput from "./search-input/SearchInput";

function SearchCom() {
  return (
    <div className="flex flex-row gap-1 px-2.5">
      <SearchInput />
      <BlockBtn />
    </div>
  );
}

export default SearchCom