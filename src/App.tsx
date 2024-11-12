import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import Loader from "./components/Loader";
import PokemonCard from "./components/PokemonCard";
import fetchRangeOfPokemons from "./services/fetchRangeOfPokemons";
import { Pokemon, PokemonShortData } from "./util/types/Pokemon";
import PokemonDetails from "./components/PokemonDetails";

const LIMIT = 20;
const POST_OFFSET = 8;

function App() {
  const [data, setData] = useState<PokemonShortData[]>([]);
  const [dataOffset, setDataOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const observer = useRef<IntersectionObserver>();

  const lastPostElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setDataOffset((prevOffset) => prevOffset + LIMIT);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading]
  );

  const loadMoreData = async () => {
    setIsLoading(true);

    const moreData = await fetchRangeOfPokemons(dataOffset, LIMIT);
    setData((prevData) => [...prevData, ...moreData.results]);

    setIsLoading(false);
  };

  useEffect(() => {
    loadMoreData();
  }, [dataOffset]);

  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={2}>
        {data.map((item, index) => {
          const isPost = index === data.length - 1 - POST_OFFSET;

          return (
            <PokemonCard
              key={index}
              url={item.url}
              ref={isPost ? lastPostElementRef : null}
              onClick={setSelectedPokemon}
            />
          );
        })}
      </Grid>

      {selectedPokemon && (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

      {isLoading && <Loader />}
    </Box>
  );
}

export default App;
