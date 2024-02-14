import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GameScore from "./GameScore";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image
        src={game.background_image}
        fallbackSrc="fallbackSrc='https://via.placeholder.com/150'"
        alt="game-logo"
        height={"200px"}
        objectFit={"cover"}
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
