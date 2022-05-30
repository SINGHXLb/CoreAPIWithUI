import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";


const FormB = () => {


    type Inputs = {
        example: string,
        exampleRequired: string,
        email: string,
        age: number,
        color: string
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();


    
    const postForm = data => console.log(data);
    const displayError = errors => console.error(errors);



   
    return (
        <div>React hook form
            /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
            <form onSubmit={handleSubmit(postForm, displayError)}>
                <input defaultValue="test" {...register("example", {required:"example value is needed"})} />
                {errors?.example &&  errors.example.message } 
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label>Email</label>
                <input type="email" {...register("email", { required: true })} />
                <input type="number" {...register("age")} />
                <input type="color" {...register("color")} />
                <input type="submit" />
            </form>

        </div>
    );
}

export default FormB;