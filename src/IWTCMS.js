import { useState } from "react"

var ws
var append;


function Iwtcms() {
    const [form, setForm] = useState({
        type: 0,
        host: "",
        password: "",
    })
    const [connected, setConnected] = useState(false)
    const [res, setRes] = useState("")
    const [command, setCommand] = useState("")
    return (
        <div className="container mt-5">
            <div className="display-4">I-Want-To-Control-My-Server</div>
            <div className="mt-3 container-fluid bg-warning rounded-3 p-3 " style={{ color: "rgb(130, 40, 0)" }}>
                <h4>Warning:</h4>
                The IWTCMS mod is based on plain TCP Socket communication,
                which is a protocal that mainstream browsers don't support.
                This website uses a proxy of my own to connect to the server.
                If you have doubt about the proxy or safety or all other stuff,
                <strong> DO NOT</strong> use this site.
            </div>
            {
                connected
                    ?
                    <div className="text-success text-center mt-2">
                        Status: <strong>Connected. </strong>
                    </div>
                    :
                    <div className="text-danger text-center mt-2">
                        Status: <strong>Not Connected. </strong>
                    </div>
            }
            <div className=" mt-2"  >
                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                    <input className="form-control" type="text" placeholder="Host:Port" value={form.host} onChange={(e) => {
                        setForm({
                            ...form,
                            host: e.target.value,

                        })
                    }}></input>
                    <input className="form-control" type="password" placeholder="Password" value={form.password} onChange={(e) => {
                        setForm({
                            ...form,
                            password: e.target.value,
                        })
                    }}></input>
                </div>
                {
                    connected ?
                        <button className="w-100 btn btn-primary mt-2" onClick={() => {
                            ws.close();
                            setConnected(false)
                        }}>Disconnect</button>
                        :

                        <button className="w-100 btn btn-primary mt-2" onClick={() => {
                            ws = new WebSocket("ws://127.0.0.1:8090")
                            ws.onopen = () => {
                                ws.send(JSON.stringify(form))
                            }
                            ws.onmessage = (data) => {
                                append = (append === undefined ? "" : append) + data.data
                                setRes(append)
                                if (data.data === "iwtcms_login_success\n") {
                                    setConnected(true)
                                }
                                var textarea = document.getElementById("output");

                                if (textarea.selectionStart == textarea.selectionEnd) {
                                   setTimeout(() => {
                                     textarea.scrollTop = textarea.scrollHeight; 
                                   }, 100);
                                }
                            }
                        }}>Connect</button>
                }

            </div>
            <div className="mt-2">
                <input value={command} placeholder="Command" className="w-100 form-control " disabled={connected ? false : true} onKeyDown={(data) => {
                    if (data.key === "Enter") {
                        ws.send(JSON.stringify({ type: 1, command: command }))
                        setCommand("")
                    }
                }} onChange={(e) => {
                    setCommand(e.target.value)

                }} />
                <textarea id="output" className="w-100 mt-2 " style={{ resize: "none", height: "200px", }} readOnly={true} value={res} />
            </div>
        </div>
    )
}

export default Iwtcms