import { Task } from "../Task";
import styles from "./Tasks.module.css";

import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../App";

interface Props {
  tasks: ITask[];
  onCompleted: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onCompleted, onDelete }: Props) {
  const tasksQuantify = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  const borderTop = { borderTop: "1px solid var(--gray-400)" };

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p className={styles.textBlue}>Tarefas criadas</p>
          <span>{tasksQuantify}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantify}
          </span>
        </div>
      </header>

      <div className={styles.list} style={borderTop}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCompleted={onCompleted}
            onDeleted={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
