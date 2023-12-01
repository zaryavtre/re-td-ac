/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function NewTodo({todoTitle}) {
    console.log(todoTitle)
    return (
      <>
        {todoTitle.map((todo, index) => 
          <div className="bg-white rounded-1" key={index}>
            <p>{todo.title}</p>
          </div>
        )}
      </>
    );
  }
  