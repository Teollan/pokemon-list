import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from "@mui/material";
import { Pokemon } from "../util/types/Pokemon";
import ImageBox from "./ImageBox";
import capitalize from "../util/string/capitalize";

type PokemonDetailsProps = {
  pokemon: Pokemon;
  onClose?: () => void;
};

const StyledCard = styled(Card)({
  position: "fixed",
  top: "10%",
  left: "10%",
  width: "80%",
  height: "80%",
});

const InfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 50px",
});
const ContentContainer = styled(Box)({
  display: "flex",
  justifyContent: "start",
  padding: "0 50px",
});

export default function PokemonDetails(props: PokemonDetailsProps) {
  const { height, weight } = props.pokemon;
  const name = capitalize(props.pokemon.name);
  const image = props.pokemon.sprites.front_default;

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h2" align="center">
            {name}
          </Typography>
        }
      />

      <CardContent>
        <ContentContainer>
          <ImageBox src={image} alt={`Image of ${name}`} />

          <InfoContainer>
            <Typography variant="h5">Info:</Typography>
            <Typography variant="body2">Height: {height}</Typography>
            <Typography variant="body2">Weight: {weight}</Typography>
          </InfoContainer>
        </ContentContainer>
      </CardContent>

      <CardActions>
        <Button onClick={handleClose}>Close</Button>
      </CardActions>
    </StyledCard>
  );
}
