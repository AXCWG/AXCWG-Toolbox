import { useState } from "react"

var ws
var append;


function Iwtcms() {
    const [form, setForm] = useState({
        type: 0,
        host: "",
        password: "",
    })
    const [connected, setConnected] = useState(1)
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
            <div className="text-center ">
                Currently only supports Non-tls connection
            </div>
            {
                connected === 0
                    ?
                    <div className="text-success text-center mt-2">
                        Status: <strong>Connected. </strong>
                    </div>
                    : connected === 1 ?
                        <div className="text-danger text-center mt-2">
                            Status: <strong>Not Connected. </strong>
                        </div>
                        : connected === 2 ?
                            <div className="text-center mt-2">
                                Status: <strong>Connecting</strong>
                            </div> : null
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
                    (connected === 0 || connected === 2) ?
                        <button className="w-100 btn btn-primary mt-2" onClick={() => {
                            ws.close();
                            setConnected(1)
                        }}>Disconnect</button>
                        : connected === 1 ?

                            <button className="w-100 btn btn-primary mt-2" onClick={() => {
                                setConnected(2)
                                ws = new WebSocket("wss://andyxie.cn:8090")
                                ws.onopen = () => {
                                    ws.send(JSON.stringify(form))
                                }
                                ws.onmessage = (data) => {
                                    append = (append === undefined ? "" : append) + data.data
                                    setRes(append)
                                    try {
                                        var parsed = JSON.parse(data.data)
                                        append = (append === undefined ? "" : append) + parsed.message

                                        return
                                    } catch {

                                    }
                                    if (data.data === "iwtcms_login_success\n") {
                                        setConnected(0)
                                    }
                                    var textarea = document.getElementById("output");

                                    if (textarea.selectionStart == textarea.selectionEnd) {
                                        setTimeout(() => {
                                            textarea.scrollTop = textarea.scrollHeight;
                                        }, 100);
                                    }
                                }
                            }}>Connect</button>
                            : null
                }

            </div>
            <div className="mt-2">
                <input value={command} placeholder="Command" className="w-100 form-control " disabled={connected === 1 ? true : false} onKeyDown={(data) => {
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