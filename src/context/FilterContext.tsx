import React, {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

const FilterContext = createContext<{
    setKosher: Dispatch<SetStateAction<boolean>>
    kosher: boolean
    setSearchValue: Dispatch<SetStateAction<string>>
    searchValue: string
}>({
        setKosher(value: ((prevState: boolean) => boolean) | boolean): void {
        }, setSearchValue(value: ((prevState: string) => string) | string): void {
        },
        searchValue: '',
        kosher: true
    }
);


const FilterProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [kosher, setKosher] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>('');

    return <FilterContext.Provider value={{
        kosher, setKosher, searchValue, setSearchValue
    }}
    ><>{children}</>
    </FilterContext.Provider>
}

function useFilterContext() {
    const {kosher, setKosher, searchValue, setSearchValue} = useContext(FilterContext);
    return {kosher, setKosher, setSearchValue, searchValue}
}

export
{
    useFilterContext, FilterProvider
}
    ;