import { createContext } from "react";


interface ISearchState {
   searchValue: string
   setSearchValue: (c: string) => void
}

const SearchContext = createContext<ISearchState>({
   searchValue: '',
   setSearchValue: () => {}
});

export default SearchContext;
