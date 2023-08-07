import { Icon, IconButton } from "@chakra-ui/react";
import { BiSolidLockOpenAlt } from "react-icons/bi";

function BlockBtn() {
  return (
    <IconButton
      isRound={true}
      variant="ghost"
      colorScheme="blackAlpha"
      aria-label="Reference"
      size="sm"
      fontSize="16px"
      icon={<Icon as={BiSolidLockOpenAlt} color="var(--special-color)" />}
    />
  );
}

export default BlockBtn;
