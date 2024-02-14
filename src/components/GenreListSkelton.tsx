import { HStack, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const GenreListSkelton = () => {
  return (
    <HStack>
      <SkeletonCircle size={"8"} />
      <Skeleton height={"20px"} width={"150px"} />
    </HStack>
  );
};
export default GenreListSkelton;
