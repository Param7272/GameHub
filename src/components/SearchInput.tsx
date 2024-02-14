import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{
        width: "100%",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          onSearch(inputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftAddon>
          <CiSearch size={24} />
        </InputLeftAddon>
        <Input ref={inputRef} borderRadius={"70px"} />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
