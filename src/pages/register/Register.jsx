import { useContext, useEffect } from 'react';

import email from '../../assets/social-logo/email.jpeg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/provider/ContextProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { user, setUser, updateUserProfile, signInWithGoogle, loading, signUpUser, } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Register"
    }, [])
    const handleSubmitCreateUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log({ name, email, password, photo });
        signUpUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                setUser({ ...user, photoURL: photo, displayName: name })
                if (result) {
                    setTimeout(() => {
                        navigate(location?.state ? location.state : "/")
                    }, 1000);
                }
                toast.success("Register Successful!")

            })
            .catch(error => {
                toast.error(error.message)
                console.log(error.message);
            })

    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                if (result) {
                    setTimeout(() => {
                        navigate(location?.state ? location.state : "/")
                    }, 1000);
                }
                toast.success("Google Login successful!")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className=" dark:bg-gray-900 p-5">
            <div className="flex flex-row-reverse rounded-md justify-center min-h-[calc(100vh-306px)]">
                <div className="hidden bg-cover lg:block rounded-md lg:w-1/2" style={{ backgroundImage: 'url(https://i.ibb.co/sWKZMhT/istockphoto-487745566-612x612.jpg)' }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                        <div>
                            <h2 className="text-2xl  text-white sm:text-3xl">Welcome our Alternative system</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                            where we redefine conventional choices. Explore a world of sustainable and creative alternatives tailored to meet your needs.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full h-auto max-w-md px-6 mx-auto lg:w-1/2 border p-1 shadow-lg rounded-md">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-7 h-7" src={email} alt="" />
                            </div>
                            <p className=" text-xl font-bold">Sign Up to access your account</p>
                        </div>
                        <button onClick={handleGoogleLogin} className="flex w-full items-center justify-center px-6 py-3 mt-4 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>

                            <span className="mx-2  font-bold">Sign in with Google</span>
                        </button>
                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  lg:w-1/4'></span>

                            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                                or REGISTRATION WITH EMAIL
                            </div>

                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                        </div>

                        <div className="">
                            <form onSubmit={handleSubmitCreateUser}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-bold">Name</label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label htmlFor="photo" className="block mb-2 text-sm font-bold dark:text-gray-200">Photo</label>
                                    <input
                                        type="photo"
                                        name="photo"
                                        id="photo"
                                        required
                                        placeholder="photoURL"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-bold dark:text-gray-200">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="example@example.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm font-bold  dark:text-gray-200">Password</label>

                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        placeholder="Your Password"
                                        className="block w-full px-4 py-2 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg 
                                        text-black
                                        dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-2">
                                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform  rounded-lg focus:outline-none  focus:ring focus:ring-opacity-50 font-bold bg-black">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <p className="my-3 text-sm text-center text-gray-400">Already have an account yet? <Link to='/login' className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign In</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;