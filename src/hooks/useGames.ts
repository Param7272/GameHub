import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  search: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        search,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, search]
  );
export default useGames;
