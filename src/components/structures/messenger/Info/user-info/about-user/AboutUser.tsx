import { Text, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { LiaInfoCircleSolid } from 'react-icons/lia'
import { AboutUserProps, DataAboutUser } from "./types";

const AboutUser: FC<AboutUserProps> = () => {

    const data : DataAboutUser = [
        {title: 'Department', ctx: 'Some department'},
        {title: 'Position', ctx: 'Some position'},
        {title: 'Mobile', ctx: '+998 99 999 99 99'}
    ]

  return (
    <div className="bio w-full px-4 flex flex-row gap-5">
      <div>
        <Icon
          as={LiaInfoCircleSolid}
          fontSize="24px"
          color="var(--special-color)"
        />
      </div>

      <div className="flex flex-col gap-3">

        {
            data.map((item, i) =>(
                <div key={i}>
                  <div>
                    <Text fontSize="sm">{ item.ctx }</Text>
                  </div>
                  <div>
                    <Text fontSize="sm" color="grey">
                      { item.title }
                    </Text>
                  </div>
                </div>
            ))
        }

      </div>
    </div>
  );
};

export default AboutUser;
