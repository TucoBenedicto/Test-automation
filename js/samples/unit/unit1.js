/**
 * The @param tag provides the name, type, and description of a function parameter
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    return `Hello, ${name}`
}
