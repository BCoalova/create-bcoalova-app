import { useState } from 'react'

function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue)

    function reset() {
        setValue(initialValue)
    }

    const bind = {
        value,
        onChange: e => setValue(e.target.value),
    }

    return [value, bind, reset]
}

export default useInput
