const BOARDS_STORAGE_KEY = "boards";

export const getBoards = () => {
  try {
    return JSON.parse(localStorage.getItem(BOARDS_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export const addBoard = (boardName) => {
  const newBoard = {
    id: crypto.randomUUID(),
    name: boardName.trim(),
    wordIds: [],
  };
  const updatedBoards = [...getBoards(), newBoard];
  localStorage.setItem(BOARDS_STORAGE_KEY, JSON.stringify(updatedBoards));
  return newBoard;
};