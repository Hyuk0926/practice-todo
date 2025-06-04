import { createContext, useState, useContext } from "react";

//1, CONTEXT  생성
const BoardContext = createContext();

//2, PROVIDER COMPONENT 생성
export const BoardProvider = ({initialData = [], children}) => {
    const [boards, setBoards] = useState(initialData);  

    const value = {boards, setBoards}
    
    return<BoardContext.Provider value={value}>{children}</BoardContext.Provider>
}

//3, 사용할 준비

export const useBoards = () => {
    const ctx = useContext(BoardContext);

    if(!ctx) {
        throw new Error("useBoard는 앱을 감싸서 사용해야 합니다");
    }

    return ctx;
}


