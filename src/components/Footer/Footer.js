

const Footer = ({todolist, status, setStatus, clearCompleted}) => {
    return (
        <div className="footer">
            <p>{todolist.length} items</p>
            <div className="footer-center">

                <button className={status === 'all' ? 'active': ''} onClick={()=>{
                    setStatus('all')
                }}>all</button>

                <button className={status === 'active' ? 'active': ''} onClick={()=>{
                    setStatus('active')
                }}>active</button>

                <button className={status === 'completed' ? 'active': ''} onClick={()=>{
                    setStatus('completed')
                }}>completed</button>

                <button className={status === 'cart' ? 'active': ''} onClick={()=>{
                    setStatus('cart')
                }}>cart</button>

            </div>

            <button onClick={clearCompleted}>clear completed</button>
        </div>
    );
}

export default Footer;