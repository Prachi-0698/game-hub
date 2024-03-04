
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardShimmer from './GameCardShimmer';
import GameCardConatiner from './GameCardContainer';

const GameGrid = () =>{
    const {data, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    return(
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={'10px'} spacing={10}>
                {isLoading && skeletons.map(skeleton => 
                <GameCardConatiner>
                    <GameCardShimmer key={skeleton} />
                </GameCardConatiner> )}
                {data?.map(game => (
                    <GameCardConatiner>
                        <GameCard key={game.id} game={game} />
                    </GameCardConatiner>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;