import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const {
        register, // read the data and save a key
        handleSubmit, // handles the form data
        reset, // reset the input feilds of the form
        formState: { errors, isSubmitting }
    } = useForm()

    function formData(data) {
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res()
                console.log(data)
                reset()
            },3000)
        })
    }
    return (
        <div>
            {/* 
            react-form-hook
            manual code
        */}

            <form onSubmit={handleSubmit(formData)}>
                <label htmlFor="">Name:</label>
                <input type="text" {...register("name",
                    {
                        required: true,
                        minLength: {
                            value: 5, message: "Minimum 5 Characters"
                        },
                        maxLength: {
                            value: 10, message: "Maximum 10 Characters"
                        }
                    }
                )} />
                <br />
                { errors.name &&  <span style={{color:"red"}}>{errors.name.message}</span> }
                <br />
                <label htmlFor="">Email:</label>
                <input type="email" {...register("email")} />
                <br />
                <input type="submit" disabled={isSubmitting} value={(isSubmitting)?"Submitting....":"Submit"} />
            </form>
        </div>
    )
}

export default Form
