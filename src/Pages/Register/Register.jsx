import logo from "../../assets/taskwave2.png";
import banner from "../../assets/login/login.jfif";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    

    return (
        <div className="min-h-screen flex">
            {/* Form Section - 40% width */}
            <div className="w-full lg:w-2/5 flex items-center justify-center bg-base-100">
                <div className="max-w-md w-full p-8 shadow-2xl">
                    <div className="text-center mb-6">
                        <a className="btn btn-ghost w-32 md:w-36 lg:w-44 mx-auto">
                            <img src={logo} alt="Logo" />
                        </a>
                        <h2 className="text-2xl font-bold mt-4">Register an Account</h2>
                        <p className="mt-2">Please fill all the required form to create an account in TaskWave.</p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                {...register("name", { required: true })}
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/
                                })}
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be at least 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password must be at most 20 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">
                                    Password must have one uppercase, one lowercase, one number, and one special character
                                </p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary w-full" type="submit" value="Register" />
                        </div>
                    </form>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-gray-600">OR</p>
                        <hr className="w-full dark:text-gray-600" />
                    </div>
                    <button
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Register with Google</p>
                    </button>
                    <p className="text-center font-poppins my-2">
                        <small>
                            Already have an Account?{" "}
                            <Link to="/login">
                                <span className="text-blue-600">Please login</span>
                            </Link>
                        </small>
                    </p>
                </div>
            </div>
            {/* Banner Section - 60% width */}
            <div
                className="w-3/5 bg-cover bg-center hidden lg:block"
                style={{ backgroundImage: `url(${banner})` }}
            >
                {/* Optionally, you can add some content here */}
            </div>
        </div>
    );
};

export default Register;
