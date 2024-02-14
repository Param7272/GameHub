import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListSkelton from "./GenreListSkelton";
const SKELTONCARDSLENGTH = 20;
interface Props {
  selectedGenre: Genre | null;
  setSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ setSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();
  const SkeletonCards = new Array(SKELTONCARDSLENGTH).fill(0);

  return (
    <VStack alignItems={"start"} padding={4}>
      {isLoading
        ? SkeletonCards.map((_, index) => {
            return <GenreListSkelton key={index} />;
          })
        : genres.map((genre) => {
            return (
              <HStack key={genre.id}>
                <Image
                  src={genre.image_background}
                  alt="logo"
                  width={8}
                  height={8}
                  borderRadius={"100%"}
                />
                <Button
                  onClick={() => setSelectedGenre(genre)}
                  variant={"link"}
                  fontWeight={
                    genre.name === selectedGenre?.name ? "bold" : "normal"
                  }
                  textDecoration={
                    genre.name === selectedGenre?.name ? "underline" : "none"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            );
          })}
    </VStack>
  );
};
export default GenreList;
