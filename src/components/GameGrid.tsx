import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
const SKELTONCARDSLENGTH = 6;

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  search: string;
}

const GameGrid = ({ selectedGenre, selectedPlatform, search }: Props) => {
  const { data: games, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    search
  );
  const SkeletonCards = new Array(SKELTONCARDSLENGTH).fill(0);

  return (
    <SimpleGrid minChildWidth="250px" spacing="10px" padding={"10px"}>
      {isLoading
        ? SkeletonCards.map((_, index) => {
            return <GameCardSkelton key={index} />;
          })
        : games.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })}
    </SimpleGrid>
  );
};
export default GameGrid;
