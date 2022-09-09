import todoLogo from "../../assets/Logo.svg";

import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./Header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [content, setContent] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(content);
    setContent("");
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newFormTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={content}
          onChange={onChangeContent}
        />

        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
