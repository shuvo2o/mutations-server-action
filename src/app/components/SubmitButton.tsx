import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <div>
            <button className='bg-blue-500 text-white p-2 w-full hover:bg-blue-700 cursor-pointer rounded-md'>{pending ? 'Submitting...' : 'Create User'}</button>
        </div>
    )
}

export default SubmitButton
