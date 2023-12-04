/* eslint-disable react/prop-types */
export default function AddTodo(props) {
    console.log(props)
    const display = {
        display: props.visibility ? 'block' : 'none'
    }
    return (
        <>
            <div className="bg-white w-full h-full absolute bottom-0 top-0 right-0 left-0" style={display}>
                <div className="flex p-4 justify-end">
                    <div onClick={props.formHide} className="border-2 border-gray-400 rounded-full w-12 h-12 relative flex items-center justify-center cursor-pointer">
                        <div className="bg-gray-700 w-4 h-0.5 rotate-45 absolute"></div>
                        <div className="bg-gray-700 w-4 h-0.5 -rotate-45 absolute"></div>
                    </div>
                </div>
                <div>
                    <form onSubmit={props.submitForm}>
                        <div className="p-6 flex flex-col content-between justify-center gap-y-4">
                            <input type="textarea"
                                placeholder="Add your Todo"
                                className="bg-transparent p-2 text-2xl text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg"
                                onChange={props.message}
                                value={props.value}
                                />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700">Add Todo ^</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}