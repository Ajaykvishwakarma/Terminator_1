
function Counter1(props) {

    console.log("Counter Recieved Props", props);

    return(
        <>
        <h1>Counter1</h1>
        <h3 className="Counter1"> Counter : {props.value} : is Married : {props.isMarried ? "YES" : "NO"} </h3>
        </>
    )

}

const Counter2 = (props)  => {

    return (
        <>
        <h1>Counter2</h1>
        <h3 className="counter2"> Name: {props.name} Age: {props.age} Gender: {props.gender} </h3>
        </>
    )
}

export { Counter1, Counter2}