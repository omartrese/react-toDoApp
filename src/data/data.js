localStorage.setItem("todos", JSON.stringify([{title: "test", desc:"testDesc"}]));

export const tasks = () => {
    const todosFromStorage = localStorage.getItem("todos");
    return todosFromStorage ? JSON.parse(todosFromStorage) : [];
}