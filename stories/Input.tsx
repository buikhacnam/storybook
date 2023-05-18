import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    width?: number
    placeholder?: string
    height?: number
}

export default function Input({
    width,
    height,
    placeholder,
    ...props
}: InputProps) {
    return (
        <>
            <input type="text" placeholder={placeholder} {...props} />

            <style jsx>{`
                input {
                    padding: 0.5rem;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    width: ${width ? width + 'px' : '100%'};
                    height: ${height ? height + 'px' : 'auto'};
                }

                input:focus {
                    outline: none;
                    border-color: #1e90ff;
                }

                input::placeholder {
                    color: #ccc;
                }

                input:focus::placeholder {
                    color: #1e90ff;
                }
            `}</style>
        </>
    )
}
