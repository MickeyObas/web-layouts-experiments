export default function Box({onClick, value}){
    return (
        <div className="box" onClick={onClick}>{value}</div>
    )
}