import { FC } from 'react'
import NavBtn from "@/components/ui/buttons/nav-btn/NavBtn";
import GuideModal from "./guide-modal/GuideModal";
import { useDisclosure } from "@chakra-ui/react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const Guide : FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBtn
        tLabel="Informative guide"
        aLabel="Guide"
        fs="16px"
        icon={BsFillJournalBookmarkFill}
        callback={onOpen}
      />

      <GuideModal state={isOpen} handler={onClose} />
    </>
  );
}

export default Guide