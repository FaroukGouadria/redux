const incrementValue = () => {
    return { type: 'increment' }
}
const decrementValue = () => {

    return { type: 'decrement' }
}
const incrementDecrementValue = (ActionType) => {
    switch (ActionType) {
        case 'increment':
            return {
                type: 'increment'
            };
        case 'decrement':
            return {
                type: 'decrement'
            };
    }
}
const setCustomValue = (text) => {
    return { type: 'changeValue', payload: text }
}


export { incrementValue, decrementValue, setCustomValue, incrementDecrementValue }