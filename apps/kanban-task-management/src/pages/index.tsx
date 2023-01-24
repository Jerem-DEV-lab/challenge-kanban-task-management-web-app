import React from "react";
import {Boards, WrapperApp} from "@kanban/ui/components";
import type {Board} from "@kanban/typescript"

const board: Board ={
    title: "Test",
    columns: [
        {
            id: " 1",
            title: "Todo",
            color: "#49C4E5",
            tasks: [
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
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
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
            ]
        },
        {
            id: " 1",
            title: "Doing",
            color: "#8471F2",
            tasks: [
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
            ]
        },
        {
            id: " 1",
            title: "Done",
            color: "#67E2AE",
            tasks: [
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
                {
                    id: " 1",
                    title: "une tâche",
                    description: "une description",
                    status: false,
                    position: 1,
                    subtasks: []
                },
            ]
        }]
}
/*const Portal = dynamic(async () => (await import('@/components/portal/Portal')), {ssr: false})*/
export default function Home() {
    return <WrapperApp>
        <Boards board={board}/>
    </WrapperApp>
}
