import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
interface Props {
  onAdd: (title: string) => void;
}

function TaskInput({ onAdd }: Props) {
  const [value, setValue] = useState("");
  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };
  return (
    <div>
      <Input
        placeholder="Enter a new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleAdd}>Add Task</Button>
    </div>
  );
}

export default TaskInput;
