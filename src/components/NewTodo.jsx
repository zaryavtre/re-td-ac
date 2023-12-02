/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function NewTodo({todoTitle}) {
    console.log(todoTitle)
    return (
      <>
          {todoTitle.map((todo) => <div className="bg-white rounded-1" id={todo.id} key={todo.id}>
            <p>{todo.title}</p>
          </div>)}
      </>
    );
  }
  