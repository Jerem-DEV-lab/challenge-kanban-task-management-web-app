import '@/styles/globals.scss'
import {Board} from '@kanban/typescript';
import type {AppProps} from 'next/app'
import {BoardContext} from "../../context/BoardContext";

const board: Board = {
    title: "Test",
    columns: [
        {
            id: "1",
            title: "Todo",
            color: "#49C4E5",
            tasks: [
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: [
                        {
                            id: " 1",
                            title: "une tâche",
                            status: true,
                        },
                        {
                            id: " 1",
                            title: "une tâche",
                            status: false,
                        },]
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
            ]
        },
        {
            id: "2",
            title: "Doing",
            color: "#8471F2",
            tasks: [
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
            ]
        },
        {
            id: "3",
            title: "Done",
            color: "#67E2AE",
            tasks: [
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    columnId: "1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
            ]
        }]
}
export default function App({Component, pageProps}: AppProps) {
    return <BoardContext.Provider value={board}>
        <Component {...pageProps} />
    </BoardContext.Provider>
}
