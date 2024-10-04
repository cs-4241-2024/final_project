export default function Bracket(props: {name?: string, subtitle?: string, className?: string}) {
    return (<div className={
        (props.className ? " " + props.className : "") +
            (props.name==="BYE" ? "bg-gray-700 text-white" : " ") +
            " p-4 rounded-3xl bg-sky-50 text-cyan-900 my-2 border-2"}>

            <h1>{props.name ? props.name : "Not Determined"}</h1>
            {props.subtitle ? <h2 className={"text-xs"}>{props.subtitle}</h2> : ""}
        </div>
    )
}