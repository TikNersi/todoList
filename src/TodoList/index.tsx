import { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ModalForm } from "../ModalForm";
import { TodoContext } from "../Context/Context";
import TodoForm from "./todoForm";
import Todo from "./todo";

import * as styles from "./styles";

const TodoList: any = () => {
  const { addTodo, todos, deleteTodo, editTodo } = useContext(TodoContext);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(todos);

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onEnd = (result: any) => {
    setData(reorder(data, result.source.index, result.destination.index));
  };

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );

  useEffect(() => setData([...todos]), [todos]);

  return (
    <>
      <styles.Button>
        <button onClick={() => setIsOpen(true)}>Add Todo</button>
      </styles.Button>
      <ModalForm state={todos} open={isOpen} onCancel={() => setIsOpen(false)}>
        <TodoForm addTodo={addTodo} onCancel={() => setIsOpen(false)} />
      </ModalForm>
      <styles.Container>
        <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="asddas">
            {(provided) => (
              <div style={{width:"100%"}} ref={provided.innerRef}>
              <div className="container" >
                <div className="uncomplete-todos">
                <h2>BackLog</h2>
                  {data.map((todo: any, ind: any) => {
                    return (
                      <Draggable
                        draggableId={`${todo.id}`}
                        key={`${todo.title}`}
                        index={ind}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Todo
                              editTodo={editTodo}
                              id={todo.id}
                              deleteTodo={deleteTodo}
                              incomingdescription={todo.description}
                              incomingtitle={todo.title}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
              </div>
                  <div className="pending">
                    <h2>In Progress</h2>
                  </div>
                  <div className="complete">
                    <h2>Done</h2>
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </styles.Container>
    </>
  );
};

export default TodoList;
