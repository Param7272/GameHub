import {
  FormLabel,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        id="colorMode"
        colorScheme="whatsapp"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <FormLabel cursor={"pointer"} htmlFor="colorMode" mb={0}>
        {colorMode === "light" ? "Light" : "Dark"}
      </FormLabel>
    </HStack>
  );
};
export default ColorModeSwitch;
