import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const SortSelector = () =>{
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By: Relevance</MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Rating</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Popularity</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector;