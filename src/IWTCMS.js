import { useState } from "react"


function Iwtcms() {
    const [form, setForm] = useState({
        host: "",
        password: "",
    })
    const [connected, setConnected] = useState(false)
    return (
        <div className="container mt-5">
            <div className="display-4">I-Want-To-Control-My-Server</div>
            <div className="mt-3 container-fluid bg-warning rounded-3 p-3 " style={{color: "rgb(130, 40, 0)"}}>
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
                    <input className="form-control" type="text" placeholder="Host" value={form.host} onChange={(e) => {
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

                <button className="w-100 btn btn-primary mt-2">Connect</button>
            </div>
        </div>
    )
}

export default Iwtcms