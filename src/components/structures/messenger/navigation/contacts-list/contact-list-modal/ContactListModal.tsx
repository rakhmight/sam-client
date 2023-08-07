import ContactSearchInput from "./contact-search-input/ContactSearchInput";
import Contact from "./contact/Contact";
import {
  IconButton,
  Icon,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { NavigationModalProps } from "../../@types";
import { MdClose, MdPersonSearch } from "react-icons/md";

function ContactListModal({ state, handler }: NavigationModalProps) {
  return (
    <Modal isOpen={state} onClose={handler} size="md" isCentered>
      <ModalOverlay />
      <ModalContent className="flex flex-col gap-2.5">
        <div>
          <div className="flex gap-2.5 justify-between py-2 px-4">
            <div className="flex gap-0.5 items-center">
              <div>
                <Icon
                  as={MdPersonSearch}
                  color="var(--main-color)"
                  fontSize="18px"
                />
              </div>
              <div>
                <Text fontSize="md" as="b">
                  Contacts
                </Text>
              </div>
            </div>
            <div>
              <IconButton
                isRound={true}
                variant="ghost"
                colorScheme="red"
                aria-label="Contacts"
                size="sm"
                fontSize="18px"
                icon={<Icon as={MdClose} />}
                onClick={handler}
              />
            </div>
          </div>

          <Divider borderTop="4px solid" color="#e2e8f0" />
        </div>

        <div className="flex flex-col">
          <ContactSearchInput />

          <Divider className="mt-2.5" />

          <div className="contacts__list">
            <Contact />
          </div>

          <Divider className="mb-2.5" />
        </div>
      </ModalContent>
    </Modal>
  );
}

export default ContactListModal;
