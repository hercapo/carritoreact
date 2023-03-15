const Button = (props) => {
    console.log(props)
    return <button className="me-3" onClick={props.callback} style={{ backgroundColor: 'red', color: 'white'}}>{props.label}</button>
}

export default Button
