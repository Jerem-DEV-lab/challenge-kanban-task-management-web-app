import Style from "../../styles/components/input/input-group.module.scss";
import Styles from '../../styles/components/modal/modal-add-task.module.scss';
import {InputGroup, TextareaGroup} from "../input/InputGroup";
import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useCallback,
    useContext,
    useRef,
    useState
} from "react";
import {Board, ColumnBoard, Subtask, Task} from '@kanban/typescript';
import {Input} from '../input/Input';
import {IconCross} from "../icons/IconCross";
import clsx from "clsx";
import {SelectInput} from "../input/SelectInput";
import {BoardContext} from 'context/BoardContext';
import {useAutoClose} from "../../hooks/useAutoClose";
import dynamic from "next/dynamic";

type ModalAddTaskProps = {
    setStateModal: Dispatch<SetStateAction<boolean>>
}
const Portal = dynamic(async () => (await import('@/components/portal/Portal')), {ssr: false})
const defaultTask: Task = {
    id: Date.now().toString(),
    title: "",
    description: "",
    subtasks: [],
    status: false,
    position: 0,
    columnId: "0"
}
export const ModalAddTask = ({setStateModal}: ModalAddTaskProps) => {
    const board = useContext(BoardContext)
    const [tasks, setTasks] = useState<Task>(defaultTask);
    const wrapperRef = useRef(null);
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setTasks(prevState => ({...prevState, [name]: value}));
    }, []);
    useAutoClose(wrapperRef, setStateModal)
    const addInputSubtask = useCallback(() => {
        setTasks(prevState => ({
            ...prevState,
            subtasks: [...prevState.subtasks,
                {id: Date.now().toString(), title: "", status: false}
            ]
        }));
    }, [])
    const handleChangeSubtask = useCallback((id: any, e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setTasks(prevState => ({
            ...prevState,
            subtasks: prevState.subtasks.map((subtask) => {
                if (subtask.id === id) {
                    return {...subtask, title: value}
                }
                return subtask;
            })
        }))
    }, []);
    const handleDeleteSubtask = useCallback((id: Subtask['id']) => {
        setTasks(prevState => ({
            ...prevState,
            subtasks: prevState.subtasks.filter((subtask) => subtask.id !== id)
        }))
    }, [])
    return <Portal>
        <div className={Styles.ModalWrapper}>
            <div ref={wrapperRef} className={Styles.Modal}>
                <h3 className={Styles.ModalTitle}>Ajout d'une tâche</h3>
                <div className={Styles.GroupInput}>
                    <InputGroup
                        label="Titre"
                        name="title"
                        inputType="text"
                        onChange={handleChange}
                        placeholder="e.g Take coffee break"/>
                    <TextareaGroup
                        label="Description"
                        name="description"
                        onChange={handleChange}
                        placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                    />
                    <div className={Style.InputGroupWrapper}>
                        <label htmlFor="subtask" className={Style.Label}>Subtasks</label>
                        <div className={Styles.Stack}>
                            {tasks.subtasks.length < 0 ? <div className={Styles.GroupInputSubtask}>
                                    <Input name="subtask" inputType="text" onChange={handleChange}
                                           placeholder={"e.g Take coffee break"}/>
                                    <div>
                                        <IconCross/>
                                    </div>
                                </div> :
                                tasks.subtasks.map((subtask) => <div
                                    key={subtask.id}
                                    className={Styles.GroupInputSubtask}>
                                    <Input name="title" inputType="text"
                                           onChange={(e) => handleChangeSubtask(subtask.id, e)}
                                           placeholder={"e.g Take coffee break"}/>
                                    <div>
                                        <button onClick={() => handleDeleteSubtask(subtask.id)}>
                                            <IconCross/></button>
                                    </div>
                                </div>)}
                            <button onClick={addInputSubtask}
                                    className={clsx(Styles.ButtonAddSubtask, Styles.Button)}>+
                                Ajouter une tâche secondaire
                            </button>
                        </div>
                    </div>
                    <div className={Style.InputGroupWrapper}>
                        <label className={Style.Label} htmlFor="status">Status</label>
                        <SelectInput
                            placeholder="Sélectionner un tableau"
                            onChange={handleChange}
                            label={getTitleColumns(board)}
                            options={getIdColumns(board)}
                            name="columnId"/>
                    </div>
                </div>
                <div className={clsx(Styles.Stack, Styles.SpacingTop)}>
                    <button className={Styles.ButtonAdd}>
                        Créer la tâche
                    </button>
                </div>
            </div>
        </div>
    </Portal>
}

function getTitleColumns(boards: Board): string[] {
    return boards.columns.map((column: ColumnBoard) => column.title);
}

function getIdColumns(boards: Board): string[] {
    return boards.columns.map((column: ColumnBoard) => column.id);
}
