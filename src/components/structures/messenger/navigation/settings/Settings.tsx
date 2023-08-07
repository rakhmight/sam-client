import NavBtn from "@/components/ui/buttons/nav-btn/NavBtn";
import SettingsModal from "./settings-modal/SettingsModal";
import { useDisclosure } from "@chakra-ui/react";
import { TbSettings } from "react-icons/tb";

function Settings () {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBtn
        tLabel="Settings"
        aLabel="Settings"
        fs="20px"
        icon={TbSettings}
        callback={onOpen}
      />

      <SettingsModal state={isOpen} handler={onClose} />
    </>
  );
}

export default Settings