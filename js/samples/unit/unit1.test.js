import { sayHello } from './unit1';

//"describe" is a function in the JEST testing framework. It simply describes the suite of test cases enumerated by the "it" functions.

describe('SayHello Unit Test Suites', () => {

    /**
     * (Test basique)
     * it('should be true', () => {
     * expect(true).toBe(true)
     * })
     */

    //Test de la fonction SANS parametre/argument
    it('should return "Hello, world', () => {
        expect(sayHello()).toBe("Hello, World"); //pas de parametre
    })

    //Test de la fonction AVEC parametre/argument
    it('should return "Hello, Thomas', () => {
        expect(sayHello("Thomas")).toBe("Hello, Thomas"); //parametre = Thomas
    })

});