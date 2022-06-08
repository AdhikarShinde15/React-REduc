
export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})

export const addValue = (value) => ({
    type: 'ADDVALUE',
    payload : value
})

export const resetAll = () => ({
    type: 'RESET'
})

