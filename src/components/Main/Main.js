import AddBtns from "./AddBtns";
import Btns from "./Btns";
import Correct from "./Correct";


const Main = ({ todolist, setKey, status, deleteTodo, correctTodo,cartFunc }) => {
    return (
        <div className="todolist-menu">
            {
                status === 'cart'
                ? <AddBtns cartFunc={cartFunc}/>
                : ''
            }
            {
                todolist.length === 0
                ? <p>here is empty</p>
                : todolist.map(item => {
                    return <div key={item.id} className={
                        item.important
                            ? 'todolist-menu-item todolist-menu-item-important'
                            : 'todolist-menu-item'
                    }>
                        <div className="todolist-menu-item-left">
                            {
                                item.correct
                                    ? <Correct item={item} correctTodo={correctTodo} setKey={setKey} />
                                    : <>
                                        <button onClick={() => {
                                            setKey('completed', item.id)
                                        }}>{item.completed ? '+' : ''}</button>
                                        <p>{item.text}</p>
                                    </>
                            }

                        </div>
                        {
                            item.correct
                                ? ''
                                : <Btns
                                    setKey={setKey}
                                    item={item}
                                    status={status}
                                    deleteTodo={deleteTodo}
                                />
                        }

                    </div>
                })
            }

        </div>
    );
}

export default Main;