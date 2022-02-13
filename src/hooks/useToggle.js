import { useState } from 'react'

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    function makeFalse() {
        setValue(false)
    }

    function makeTrue() {
        setValue(true)
    }

    function toggle() {
        setValue(prevState => !prevState)
    }

    return [value, makeFalse, makeTrue, toggle]
}

export default useToggle
