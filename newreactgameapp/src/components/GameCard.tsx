import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"


interface GameProps {
    game: Game
}

const GameCard = ({game}:GameProps) => {
  return (
    <>
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            {/* {game.parent_platforms.map(platform => <Text>{platform.platform.name}</Text>)} */}
            {/* both the code above and below with mapping is correct way different version */}
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            {/* <PlatformIconsList platforms={game.parent_platforms.map(platform => platform.platform)}/> */}
            <HStack justifyContent={'space-between'}>
                <PlatformIconsList platforms={game.parent_platforms.map(platform => platform.platform)}/>
                  <CriticScore score={game.metacritic} />

                </HStack>
        </CardBody>

    </Card>
    
    
    
    </>
  )
}

export default GameCard