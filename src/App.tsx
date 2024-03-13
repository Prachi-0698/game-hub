import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from "react"
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>( {} as GameQuery )
  return (
    <Grid templateAreas=
      {`"header header"
        "aside main"`
      }
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'260px 1fr'}
    >
      <GridItem area='header' position='fixed' w='100%'>   
          <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} /> 
      </GridItem>
      <Show above='lg'>

        <GridItem   area={'aside'} paddingX={5} height="100%" >  
        <Box overflowY="auto"  maxHeight="calc(100vh - 100px)" position="sticky" zIndex="1" top="0" width="100%" 
        padding={2}  boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" css={{
          "&::-webkit-scrollbar": {
            display: "none" // Hide the scrollbar for WebKit browsers (e.g., Chrome, Safari)
          }
        }}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>      
          </Box>

        <GridItem   area={'aside'} paddingX={5} mt='30px'> 
          <Box position='fixed' h='100vh' overflowY='auto'>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>     
          </Box>  

        </GridItem>
      </Show>
      <GridItem area={'main'} mt='10px' >
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery ,platform})}/>
            <SortSelector sortSelector={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
        </Box>
        <Box paddingLeft={0}><GameGrid gameQuery={gameQuery}/></Box>
        
      </GridItem>
    </Grid>
  )
}

export default App
