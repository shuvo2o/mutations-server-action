import SubmitButton from '@/app/components/SubmitButton';
import { createUserWithState } from '@/lib/actions';
import React, { useActionState, useRef } from 'react'

const initialState = {
    message: '',
    success: false,
}

const CreateStatefulPage = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [state, formAction, isPending] = useActionState(createUserWithState, initialState);

    if (state.success) {
        formRef.current?.reset();
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='bg-white p-8 rounded-md text-black shadow-md max-w-md w-full'>
                <h1 className='text-2xl font-bold mb-6 text-center'>Create New User</h1>

                <form ref={formRef} action={formAction}>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter name'
                        required
                        className='w-full p-2 mb-4 border border-gray-300 rounded-md'
                    />

                    <input
                        type="email"
                        name='email'
                        placeholder='Enter email'
                        required
                        className='w-full p-2 mb-4 border border-gray-300 rounded-md'
                    />

                    <SubmitButton />

                    {state.message && (
                        <p
                            className={`${state.success
                                    ? "text-green-600 bg-green-100 px-2 py-1 rounded"
                                    : "text-red-600 bg-red-100 px-2 py-1 rounded"
                                } mt-3`}
                        >
                            {state.message}
                        </p>
                    )}


                </form>
            </div>
        </div>
    )
}

export default CreateStatefulPage;
