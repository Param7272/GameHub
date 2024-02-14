import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../theme/ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding={4} justifyContent={"space-between"}>
      <Image src="logo.svg" alt="logo" width={8} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
