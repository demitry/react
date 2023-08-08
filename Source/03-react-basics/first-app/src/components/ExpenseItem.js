import './ExpenseItem.css'

function ExpenseItem() {
    //return <div>Hello</div> <div>Hello</div> 
    //Error! Should return only 1 root element so wrap in 1 div
    return (
        <div className='expense-item'>
            <div>March 28th 2023</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$245.23</div>
            </div>
        </div>
    );
}

export default ExpenseItem;