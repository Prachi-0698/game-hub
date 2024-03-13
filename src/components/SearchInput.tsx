import { Input, InputGroup, InputLeftElement,Box } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props{
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event) =>{
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value)
    }}>
        <Box maxW={{ base: "100%", md: "50%" }} mx="auto">
            <InputGroup size='md'>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={18} placeholder="search games..." variant='filled' />
            </InputGroup>
        </Box>
    </form>
    
  )
}

export default SearchInput
