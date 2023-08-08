function ExpenseItem() {
    //return <div>Hello</div> <div>Hello</div> 
    //Error! Should return only 1 root element so wrap in 1 div
    return (<div>
        <div>March 28th 2023</div>
        <div>
            <h2>Car Insurance</h2>
            <div>$245.23</div>
        </div>
    </div>);
}

export default ExpenseItem;