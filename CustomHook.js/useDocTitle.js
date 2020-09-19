import {useEffect} from 'react'

function useDocTitle(count) {
    useEffect(() => {
        document.title = `Counted ${count} Times`
    }, [count]);
}

export default useDocTitle
