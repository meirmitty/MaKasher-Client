import React, {createContext, useContext, useState} from "react";

const FilterContext = createContext<{
    setKosherFilter: (kosher: boolean) => void;
    getKosherFilter: () => boolean;
}>({
        setKosherFilter(kosher: boolean): void {
        },
        getKosherFilter(): boolean {
            return true;
        },

    }
);

interface filterContext {
    kosher: boolean
}

const FilterProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [filters, setFilters] = useState<filterContext>({kosher: true});

    const getKosherFilter = () => filters.kosher;
    const setKosherFilter = (kosher: boolean) => {
        setFilters((oldFilters) => {
            return {...oldFilters, kosher: kosher}
        });
    }

    return <FilterContext.Provider value={{
        getKosherFilter,
        setKosherFilter
    }}
    ><>{children}</>
    </FilterContext.Provider>
}

function useFilterContext() {
    const {setKosherFilter, getKosherFilter} = useContext(FilterContext);
    return {setKosherFilter, getKosherFilter}
}

export
{
    useFilterContext, FilterProvider
}
    ;