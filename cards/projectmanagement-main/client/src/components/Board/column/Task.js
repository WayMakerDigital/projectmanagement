import React from "react";
import { Draggable } from "react-beautiful-dnd";
import tasks from "./../../../../src/App"
const Index = (props) => {
  return (
    <Draggable draggableId={props.task.id.toString()} index={props.index}>
      {(provided) => (
        <div
          className="card shadow-sm mb-3 p-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.task.title}
          // {tasks.title}
        </div>
      )}
    </Draggable>
  );
};

export default Index;
