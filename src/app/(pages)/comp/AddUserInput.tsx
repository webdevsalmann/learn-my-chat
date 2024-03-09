import { useState } from "react"

export default function AddUserInput() {
    const [input, setInput] = useState("")

    return (
        <div className="p-2 set-bg flex gap-2 rounded">
            {/* <label> */}
                <input className="w-full set-bg-light" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Add new user"/>
                <button className="btn-soft p-2 aspect-square">+</button>
            {/* </label> */}
        </div>
    )
}
