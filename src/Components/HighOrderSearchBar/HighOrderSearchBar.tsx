import {Box} from "@material-ui/core";


interface HighOrderSearchBarProps {
    searchBar: JSX.Element;
}

export default function HighOrderSearchBar({searchBar}: HighOrderSearchBarProps) {

    return <Box display={"flex"}
                justifyContent={"center"}
                justifySelf={"center"}
    >{searchBar}
    </Box>;

}