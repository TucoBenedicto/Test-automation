/**
 * @jest-environment jsdom
 */
// Ici j'importe DOM Test Librairy
 import {
    getByTestId
} from '@testing-library/dom'

// Je crée ma suite de test
describe('Sample 1 Integration Test Suites', () => {
    // Je crée mon test
    it('should display "Hello, Thomas"', () => {
        // Je crée un nouveau noeud
        const $wrapper = document.createElement('div')

        // Je lui injecte du HTML
        $wrapper.innerHTML = `
            <div id="root">
                <h1 data-testid="monTestIdHello">Hello, Thomas</h1>
            </div>
        `
        // Je test le resultat
        //Attention au "data-testid" present dans la balise h1 et dans la fonction "getByTestID"
        expect(getByTestId($wrapper, "monTestIdHello").textContent).toEqual("Hello, Thomas")
    })
})
