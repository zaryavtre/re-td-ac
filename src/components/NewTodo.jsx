/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function NewTodo({todoTitle, completed}) {
    return (
      <>
          {todoTitle.map((todo) => <div className="bg-blue-700 rounded-2xl p-4 flex justify-between m-2" id={todo.id} key={todo.id}>
            <div className="flex row-auto gap-3">
              <input type="checkbox" data-complete={todo.id} onChange={completed} value={todo.completed} />
              <p className="text-white">{todo.title}</p>
            </div>
            <div id="removeTodo">X</div>
          </div>)}
      </>
    );
  }
  