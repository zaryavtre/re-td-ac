/* eslint-disable react/prop-types */
export default function NewTodo(props) {
    console.log(props.todoTitle)
    return (
        <>
            <div className="bg-white rounded-1">
                <p>{props.todoTitle}</p>
            </div>
        </>
    )
}