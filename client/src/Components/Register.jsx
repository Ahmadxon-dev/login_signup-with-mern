import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const submithandler =(e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    toast.error(data.error)
                }
                else{
                    toast.success("Registered successfully")
                    navigate('/login')
                }
            })


    }
    // ctrl d
    return (
        <div className='text-center w-50 m-auto '>
            <main className="form-signin">
                <form onSubmit={(e) => submithandler(e)}>

                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating my-3">
                        <input type="text"
                               className="form-control"
                               id="floatingName"
                               placeholder="Name"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="email"
                               className="form-control"
                               id="floatingInput"
                               placeholder="name@example.com"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password"
                               className="form-control"
                               id="floatingPassword"
                               placeholder="Password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}