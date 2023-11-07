import { Link } from "react-router-dom";

const Login = () => {

    const formDataSheet = [
        {
            id: '1',
            type: 'email',
            placeholder: 'Email'
        },
        {
            id: '2',
            type: 'password',
            placeholder: 'Password'
        }
    ]

    return (
        <div className="pb-20">
            <div className="max-w-[1400px] mx-auto px-5 md:px-0">
                <div className="pt-20 pb-2 mb-16 md:max-w-[70%] mx-auto space-y-4">
                    <p className="text-base text-[#222] tracking-widest">Login now!</p>
                    <div className="space-x-5">
                        <span className="text-[#F03737] md:text-5xl text-4xl font-semibold">JOB GATOR</span>
                        <span className="md:text-5xl text-4xl font-semibold text-[#474747]">LOG IN</span>
                    </div>
                    <p className="text-base text-[#474747] tracking-widest md:max-w-[50%]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="p-10 border rounded-lg md:max-w-[70%] mx-auto shadow-xl">
                    <form>
                        {
                            formDataSheet.map(formData => <div key={formData.id}>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor={formData.type}>{formData.placeholder}</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text tracking-widest text-xs py-3 px-4" type={formData.type} name={formData.type} id={formData.type} placeholder={formData.placeholder} />
                                <br />
                            </div>)
                        }
                        <input className="btn w-full bg-[#F03737] border-[#F03737] font-semibold tracking-widest text-xs mt-4 py-3 text-white rounded-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100 hover:font-extrabold" type="submit" value="Register" />
                    </form>
                    <div className='flex'>
                        <div className='border-b-2 w-[45%]'></div>
                        <p className="text-center text-[#212529] font-semibold w-[10%] -mb-2  pt-5">OR</p>
                        <div className='border-b-2 w-[45%]'></div>
                    </div>
                    <div className="flex justify-center pt-10">
                        <button
                            className='text-xl font-medium flex items-center gap-2 border rounded-md py-3 px-6 text-[#212529] border-[#212529] hover:bg-white hover:text-[#F03737] hover:border-[#F03737] active:text-[#F03737] active:border-[#F03737] active:bg-transparent'>
                            <span>Login with : </span>
                        </button>
                    </div>
                    <p className="pt-4 text-[#212529]">New to this website? Please <Link to={'/register'}><span className="hover:underline underline-offset-4 font-bold">Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;