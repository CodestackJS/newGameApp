import { ColorModeContext, Grid, GridItem, Show, Switch } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import ColorModeSwitch from "./components/ColorModeSwitch"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"







const App = () => {
    const [selectedGenre, setselectedGenre] = useState<Genre |null>(null)

  return (
    <>
  
        {/*create a responsive layout with Chakra UI Grid */}
        {/* Nav, aside, main __________responsive for desktop and mobile */}
        <Grid 
        templateAreas={{
            base:`'nav' 'main'`,
            lg: `'nav nav' 'aside main'`, //1024

        }}>
        <GridItem area="nav">
          <NavBar/>
          

        </GridItem>


        <Show above="lg">
        <GridItem area="aside" padding={5}> 
          {""}
          <GenreList onSelectedGenre={(genre) => setselectedGenre(genre)}/>
          </GridItem>
          
        </Show>


        <GridItem area="main">
          <GameGrid/>

        </GridItem>


        </Grid>
    
    </>
  )
}

export default App