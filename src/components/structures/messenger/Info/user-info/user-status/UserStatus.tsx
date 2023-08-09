import { FC } from "react";
import { Avatar, Text } from '@chakra-ui/react'
import TimeAgo from 'react-timeago'
import engStrings from 'react-timeago/lib/language-strings/en'
// import ruStrings from 'react-timeago/lib/language-strings/ru'
// import uzStrings from 'react-timeago/lib/language-strings/uz'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const UserStatus: FC = () => {
    const formatter = buildFormatter(engStrings)
        
  return (
    <div className="main-info flex items-center gap-3 pt-2 pb-2 px-4">
      <div>
        <Avatar size="lg" name="Rakhimov Diyor"></Avatar>
      </div>
      <div>
        <div className="lim-txt lim-txt-160">
          <Text fontSize="16px" as="b">
            Rakhimov Diyor
          </Text>
        </div>
        <div>
          <Text fontSize="sm" color="grey">
            {/* online */}
            <TimeAgo date={1691558022045} formatter={formatter} />
          </Text>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
