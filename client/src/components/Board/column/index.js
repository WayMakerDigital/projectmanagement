import React from "react";
import { Droppable } from "react-beautiful-dnd";

import TaskList from "./TaskList";
import Task from "./Task";

const Index = (props) => {
  return (
    <div className="col-lg-2 mx-3 border-primary">
      <div className="card bg-light">
        <div className="card-header bg-primary text-white">
        {props.column.toUpperCase()}
        </div>

        <Droppable droppableId={props.column}>
          {(provided, snapshot) => (
            <TaskList
              refd={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
              column={props.column}
              handleTaskSubmit={props.handleTaskSubmit}
            >
              {props.tasks.map((task, index) => (
                <Task key={task.id} index={index} task={task} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Index;
