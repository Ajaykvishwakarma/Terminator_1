
export const Counter3 = (props) => {

    // console.log(props)

    return (
        <>
        <h2>Counter3</h2>
        <p>Name: {props.name}, Age: {props.age}, Salary: {props.salary} Value: {props.value}, Friends: {props.friends.a}, Bolean: {props.bolean ? "YES" : "No"}</p>
        </>
    )
}