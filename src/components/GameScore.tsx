import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const GameScore = ({ score }: Props) => {
  const color =
    score > 75 ? "green" : score > 50 ? "purple" : score > 30 ? "red" : "";

  return (
    <Badge fontSize={"lg"} colorScheme={color}>
      {score}
    </Badge>
  );
};
export default GameScore;
