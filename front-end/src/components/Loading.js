import { RotatingLines } from 'react-loader-spinner';

export default function Loading() {
    return (
        <>
            <RotatingLines
                width="200"
                height="200"
                strokeColor="#f88379"
                animationDuration="1"
            />
        </>
    )
}