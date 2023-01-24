export type Board = {
    title: string,
    columns: ColumnBoard[] | [],
}
export type ColumnBoard = {
    id: string,
    title: string,
    color?: string,
    tasks: Task[] | [],
}
export type Task = {
    id: string,
    title: string,
    description: string,
    status: boolean,
    position: number,
    subtasks: Subtask[] | [],
}
export type Subtask = {
    id: string,
    title: string,
    status: boolean,
}
