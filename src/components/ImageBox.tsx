import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)({
  objectFit: "cover",
  width: "100%",
  maxWidth: "300px",
  maxHeight: "300px",
  aspectRatio: 1,
});

type ImageBoxProps = {
  src: string;
  alt: string;
};

export default function ImageBox(props: ImageBoxProps) {
  return <StyledBox component="img" src={props.src} alt={props.alt} />;
}
