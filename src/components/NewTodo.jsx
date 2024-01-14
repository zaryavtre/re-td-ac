/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function NewTodo({todoTitle, completed, removeTodo}) {
    return (
      <>
          {todoTitle.map((todo) => <div style={{opacity: todo.completed ? '50%' : '100%'}} className="bg-blue-700 rounded-2xl p-4 flex justify-between m-2" id={todo.id} key={todo.id}>
            <div className="flex row-auto gap-3">
              <input type="checkbox" data-complete={todo.id} onChange={() => completed(todo.id)} value={todo.completed} />
              <p className="text-white">{todo.title}</p>
            </div>
            <div id="removeTodo" onClick={() => removeTodo(todo.id)}>X</div>
          </div>)}
      </>
    );
  }
  