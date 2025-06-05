import { create } from 'zustand';

export const useBoardStore = create((set) => ({
    boards: [],
    setBoards: (boards) => set({ boards }),
    addBoard: (board) => set((state) => ({ boards: [...state.boards, board] })),
    updateBoard: (id, updatedBoard) => 
        set((state) => ({
            boards: state.boards.map((board) => 
                board.id === id ? { ...board, ...updatedBoard } : board
            ),
        })),
    removeBoard: (id) =>
        set((state) => ({
            boards: state.boards.filter((board) => board.id !== id),
        })),
    editBoard: (updatedBoard) =>
        set((state) => ({
            boards: state.boards.map((board) =>
                board.id === updatedBoard.id ? { ...board, ...updatedBoard } : board
            ),
    })),
}));