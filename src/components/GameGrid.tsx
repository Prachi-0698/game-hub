
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardShimmer from './GameCardShimmer';
import GameCardConatiner from './GameCardContainer';
import { Genre } from '../hooks/useGenre';

interface Props{
    selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre} : Props) =>{
    const {data, error, isLoading} = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    return(
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 3}} padding='10px' spacing={3} overflow='hidden'>
                {isLoading && skeletons.map(skeleton => 
                <GameCardConatiner key={skeleton}>
                    <GameCardShimmer />
                </GameCardConatiner> )}
                {data?.map(game => (
                    <GameCardConatiner key={game.id}>
                        <GameCard game={game} />
                    </GameCardConatiner>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;