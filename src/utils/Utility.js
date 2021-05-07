// const debounce = (fn, delay=300) => {
//     return () => setTimeout(fn, delay)
// }

// eslint-disable-next-line import/prefer-default-export
export const debounce = (fn, delay=300) => () => setTimeout(fn, delay)

