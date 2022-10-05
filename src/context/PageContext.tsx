import { createContext } from "react";


interface IPageState {
   page: number;
   setPage: (c: number) => void;
}

const PageContext = createContext<IPageState>({
   page: 0,
   setPage: () => {}
});

export default PageContext;
