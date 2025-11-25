"use client"
import SubmitButton from '@/app/components/SubmitButton';
import { createUser } from '@/lib/actions';
import React, { useRef } from 'react'

const CreateUserPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const handelSubmit = async (formData: FormData) =>{
        const result = await createUser(formData);
        console.log("User created Successfully", result)
        if(result.success){
            alert(result.message);
            formRef.current?.reset()
        }else{
            alert(result.message)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='bg-white p-8 rounded-md text-black shadow-md max-w-md w-full'>
                <h1 className='text-2xl font-bold mb-6 text-center'>Create New User</h1>

                <form ref={formRef} action={handelSubmit}>
                    <input type="text" name='name' placeholder='Enter name' required className='w-full p-2 mb-4 border border-gray-300 rounded-md' />
                    <input type="email" name='email' placeholder='Enter email' required className='w-full p-2 mb-4 border border-gray-300 rounded-md' />
                    <SubmitButton/>
                </form>
            </div>

        </div>
    )
}

export default CreateUserPage
