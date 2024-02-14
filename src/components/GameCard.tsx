import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image
        src={game.background_image}
        alt="game-logo"
        backgroundSize={"cover"}
      />

      <CardBody>
        <Heading size={"md"}>{game.name}</Heading>
        <HStack
          alignSelf={"end"}
          marginTop={4}
          justifyContent={"space-between"}
        >
          <HStack>
            {game.parent_platforms.map(({ platform }, index) => {
              return <PlatformIconList key={index} platform={platform} />;
            })}
          </HStack>
          <GameScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
