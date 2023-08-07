import { useState } from "react";
import NavBtn from "@/components/ui/buttons/nav-btn/NavBtn";
import LogoutBtn from "./logout-btn/LogoutBtn";
import Settings from "./settings/Settings";
import ContactsList from "./contacts-list/ContactsList";
import Guide from "./guide/Guide";
import { Text } from "@chakra-ui/react";
import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";

function Navigation() {
  const [navMode, expendNav] = useState(false);
  const [showMenu, changeMenuVisible] = useState(false);

  const navHandler = () => {
    expendNav((navMode) => !navMode);

    if (!navMode) {
      setTimeout(() => {
        changeMenuVisible(true);
      }, 150);
    } else {
      changeMenuVisible(false);
    }
  };

  return (
    <div
      className={
        !navMode
          ? "nav-min navigation h-full py-2.5"
          : "nav-full navigation h-full py-2.5"
      }
    >
      <div className="h-full w-full px-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NavBtn
              tLabel=""
              aLabel="Menu"
              fs="16px"
              icon={SlMenu}
              callback={navHandler}
            />

            {showMenu && (
              <Text color="white" fontSize="14px" className="mb-0.5">
                Menu
              </Text>
            )}
          </div>
          <div>
            <NavBtn
              tLabel=""
              aLabel="Close"
              fs="18px"
              icon={MdClose}
              iColor="var(--red-color)"
              callback={navHandler}
            />
          </div>
        </div>

        <div className="flex gap-1.5 flex-col my-14">
          <div className="flex items-center gap-2">
            <ContactsList />

            {showMenu && (
              <Text color="white" fontSize="14px" className="mb-0.5">
                Contacts list
              </Text>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Guide />

            {showMenu && (
              <Text color="white" fontSize="14px" className="mb-0.5">
                Informative guide
              </Text>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Settings />

            {showMenu && (
              <Text color="white" fontSize="14px" className="mb-0.5">
                Settings
              </Text>
            )}
          </div>
        </div>
      </div>

      <div className="px-1 flex items-center gap-2">
        <LogoutBtn />

        {showMenu && (
          <Text color="white" fontSize="14px" className="mb-1">
            Log out
          </Text>
        )}
      </div>
    </div>
  );
}

export default Navigation;
