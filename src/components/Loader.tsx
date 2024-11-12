import { Box, CircularProgress, styled } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export default function Loader() {
  return (
    <StyledBox>
      <CircularProgress size={"100px"} />
    </StyledBox>
  );
}
