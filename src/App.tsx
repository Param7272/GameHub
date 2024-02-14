import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      // gridTemplateColumns={{
      //   base: "1fr",
      //   lg: "300px 1fr",
      // }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
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
