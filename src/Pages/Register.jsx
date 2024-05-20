import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form"

const Register = () => {
    const { createUser } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        try{
            const {result} = createUser(email, password)
            console.log(result)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-center justify-center">
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    type="text"
                    defaultValue="test"
                    {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                    type="email"
                    {...register("email", { required: true })} />

                <input
                    type="password"
                    {...register("password", { required: true })} />

                {errors.email && <span className="text-red-700">This field is required</span>}

                <input className="btn" type="submit" />
            </form>
        </div>
    );
};

export default Register;