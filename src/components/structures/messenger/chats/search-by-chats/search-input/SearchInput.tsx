import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup size="sm" colorScheme="facebook">
      <InputLeftElement pointerEvents="none">
        <Icon color="grey" as={BsSearch} />
      </InputLeftElement>
      <Input type="tel" placeholder="Search" size="sm" />
    </InputGroup>
  );
}

export default SearchInput;
