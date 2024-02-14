import { HStack, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack>
      <Image src="logo.svg" alt="logo" padding={4} width={16} />
    </HStack>
  );
};
export default Navbar;
