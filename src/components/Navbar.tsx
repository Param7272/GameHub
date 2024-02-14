import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../theme/ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (search: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={4} justifyContent={"space-between"} gap={"20px"}>
      <Image src="logo.svg" alt="logo" width={8} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
