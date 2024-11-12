import {
  Grid2 as Grid,
  Card,
  CardHeader,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import React, { ForwardedRef, useEffect, useState } from "react";
import Loader from "./Loader";
import { Pokemon } from "../util/types/Pokemon";
import fetchPokemon from "../services/fetchPokemon";
import capitalize from "../util/string/capitalize";
import ImageBox from "./ImageBox";

type PokemonCardProps = {
  url: string;
  onClick?: (pokemon: Pokemon) => void;
};

const StyledCard = styled(Card)({
  height: "250px",
});

const PokemonCard = React.forwardRef(
  (props: PokemonCardProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<Pokemon>(null!);

    const getPokemon = async () => {
      setIsLoading(true);

      const pokemon = await fetchPokemon(props.url);
      setPokemon(pokemon);

      setIsLoading(false);
    };

    const handleClick = (target: Pokemon) => {
      if (props.onClick) {
        props.onClick(target);
      }
    };

    useEffect(() => {
      getPokemon();
    }, []);

    const name = pokemon ? capitalize(pokemon.name) : null;
    const image = pokemon?.sprites.front_default ?? null;

    return (
      <Grid size={3} ref={ref} onClick={() => handleClick(pokemon)}>
        <StyledCard>
          {!isLoading && (
            <>
              <CardHeader
                title={<Typography align="center">{name}</Typography>}
              />

              <CardContent>
                <ImageBox src={image} alt={`Image of ${name}`} />
              </CardContent>
            </>
          )}

          {isLoading && (
            <CardContent>
              <Loader />
            </CardContent>
          )}
        </StyledCard>
      </Grid>
    );
  }
);

export default PokemonCard;
