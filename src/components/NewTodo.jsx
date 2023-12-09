/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function NewTodo({todoTitle}) {
  console.log(todoTitle)
    return (
      <>
          {todoTitle.map((todo) => <div className="bg-blue-700 rounded-2xl p-4 flex m-2" id={todo.id} key={todo.id}>
            <p className="text-white">{todo.title}</p>
          </div>)}
      </>
    );
  }
  