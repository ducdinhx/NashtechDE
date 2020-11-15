import React ,{useState, useEffect} from 'react'
import { useForm } from "react-hook-form";

export default function PasswordChange() {
    
    const [user, setUser] = useState({});
    const { register, handleSubmit, errors } = useForm();
    useEffect(() =>{
    }, [user])

    const onSubmit = () => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="password">
                    <label htmlFor="oldpassword">Old Passwoord</label>
                    <input type="password" name="username" placeholder="Enter your old password" ref={register({ required: "Username required !!", minLength: { value: 6, message: "username has at least 6 character !!" } })} />
                    {errors.password && <p className="errorMessage">{errors.password.message}</p>}
                </div>
                <div className="password">
                    <label htmlFor="newpassword">Password</label>
                    <input type="password" name="newpassword" placeholder="Enter your new password" ref={register({ required: "password required", minLength: { value: 6, message: "password has at least 6 character !!" } })} />
                    {errors.newpassword && <p className='errorMessage'>{errors.newpassword.message}</p>}
                </div>
                <div className="password">
                    <label htmlFor="comfirmpass">ConfirmPassword</label>
                    <input type="password" name="comfirmpass" placeholder="Enter your password" ref={register({ required: "password required", minLength: { value: 6, message: "password has at least 6 character !!" } })} />
                    {errors.comfirmpass && <p className='errorMessage'>{errors.comfirmpass.message}</p>}
                </div>
                <div className="col-md-5" >
                    <button type="submit" className="btn btn-primary" >Change password </button>
                </div>
            </form>
        </div>
    )
}







