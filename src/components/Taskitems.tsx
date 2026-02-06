import { Button } from "./ui/button";
interface Props {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id:number) => void;
  onDelete: (id:number) => void;
}
function TaskItems({ id, title, completed, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center gap-2">
      <input type="checkbox" onChange={()=> onToggle(id)}/>
      </div>
      <span className={completed ? "line-through text-gray-500": ""}> 
        {title}
        </span>
      <Button variant={'destructive'} onClick={() => onDelete(id)}>Delete</Button>
    </div>
  );
}

export default TaskItems;
