import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
const SKELTONCARDSLENGTH = 6;

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
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
