import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";
const SKELTONCARDSLENGTH = 6;

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
  const SkeletonCards = new Array(SKELTONCARDSLENGTH).fill(0);

  return (
    <SimpleGrid minChildWidth="250px" spacing="10px" padding={"10px"}>
      {isLoading
        ? SkeletonCards.map((skelton, index) => {
            return <GameCardSkelton key={index} />;
          })
        : games.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })}
    </SimpleGrid>
  );
};
export default GameGrid;
