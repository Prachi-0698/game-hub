import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder: (sortOrder : string) => void;
    sortSelector: string;
}

const SortSelector = ({onSelectSortOrder, sortSelector} : Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-name', label: 'Name' },
        { value: '-added', label: 'Date Added' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' }
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortSelector)

    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(order => 
                <MenuItem 
                    onClick={() => onSelectSortOrder(order.value)}
                    key={order.value} 
                    value={order.value}
                >
                    {order.label}
                </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default SortSelector;