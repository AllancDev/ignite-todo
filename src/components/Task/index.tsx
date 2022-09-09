import { ITask } from "../../App";

import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./Task.module.css";

interface Props {
  task: ITask;
  onCompleted: (taskId: string) => void;
  onDeleted: (taskId: string) => void;
}

export function Task({ task, onCompleted, onDeleted }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onCompleted(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.content}
      </p>

      <button
        className={styles.buttonRemove}
        onClick={() => onDeleted(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
