import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        md: "300px 1fr",
      }}
    >
      <GridItem area={"nav"} bgColor={"cadetblue"}>
        Navbar
      </GridItem>
      <Show above="md">
        <GridItem bgColor={"yellowgreen"} area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bgColor={"rebeccapurple"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
