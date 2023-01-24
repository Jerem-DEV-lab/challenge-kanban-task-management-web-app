import type {Board} from '@kanban/typescript'
import React, {CSSProperties} from "react";
import clsx from "clsx";
import {ButtonContained} from "../button/ButtonContained";
import Styles from '../../styles/components/board/board.module.scss'
import {randomColor} from "../../function";
import {Subtask} from "@kanban/typescript";

type BoardProps = {
    board: Board
}
export const Boards = ({board}: BoardProps) => {
    return board.columns.length > 0 ?
        <div className={Styles.Grid}
             style={{"--grid-cols": board.columns.length + 1} as CSSProperties}>
            {board.columns.map((column, index) => (<div key={index}>
                <h3 className={Styles.BoardColumnTitle}>
                        <span
                            className={Styles.BoardColumnTitleBadge}
                            style={{backgroundColor: column.color ? column.color : randomColor()}}/>
                    {column.title}&nbsp;({column.tasks.length})
                </h3>
                <div className={Styles.BoardColumn}>
                    {column.tasks.length > 0 ? column.tasks.map((task, key) => (
                        <div className={Styles.Task} key={key}>
                            {task.title}
                            <span> {task.subtasks.length > 0 ? <span>
                                    {getTotalCheckedSubtasks(task.subtasks)} sur {task.subtasks.length} tâche(s) secondaire(s)
                               </span> : <span>
                                    0 tâche secondaire
                               </span>}</span>
                        </div>
                    )) : null}
                </div>
            </div>))}
            <div className={clsx(Styles.BoardColumn, Styles.BoardNewColumn)}>
                <span>+ Nouvelle colonne</span>
            </div>
        </div> : <div className={Styles.EmptyColumn}>
            <h2>Le tableau est vide. Créer une colonne pour commencer.</h2>
            <ButtonContained>+ Ajouter une colonne</ButtonContained>
        </div>
}

function getTotalCheckedSubtasks(subtasks: Subtask[]) {
    return subtasks.reduce((acc, currentValue) => (currentValue.status ? acc + 1 : acc), 0)
}
