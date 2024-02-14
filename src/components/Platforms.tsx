import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  selectedPlatform: Platform | null;
  setSelectedPlatform: (platform: Platform) => void;
}

const Platforms = ({ setSelectedPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error, isLoading } = usePlatform();

  if (error) {
    return null;
  }
  return (
    <>
      {isLoading ? (
        <Skeleton height={"40px"} width={"130px"} borderRadius={"10px"} />
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
          </MenuButton>
          <MenuList>
            {platforms.map((platform) => {
              return (
                <MenuItem
                  onClick={() => setSelectedPlatform(platform)}
                  key={platform.id}
                >
                  {platform.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      )}
    </>
  );
};
export default Platforms;
