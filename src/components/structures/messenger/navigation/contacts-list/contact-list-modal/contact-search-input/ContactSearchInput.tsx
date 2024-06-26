import { FC } from 'react'
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const ContactSearchInput : FC = () => {
  return (
    <div className="px-4">
      <InputGroup size="sm">
        <InputLeftElement pointerEvents="none">
          <Icon color="grey" as={BsSearch} />
        </InputLeftElement>
        <Input type="tel" placeholder="Search" size="sm" />
      </InputGroup>
    </div>
  );
}

export default ContactSearchInput;
