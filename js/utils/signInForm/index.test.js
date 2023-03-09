/**
 * @jest-environment jsdom
 */
//TEST d'integration , on souhaite ici tester le formulaire

import "@testing-library/jest-dom";
import { //Import des queries getByRole, getByTestId, getByLabelText
  getByRole,
  getByTestId,
  getByLabelText
} from "@testing-library/dom";
import userEvent from '@testing-library/user-event'; //permet de completer les formulaires + gestion des clique de sourie
import { handleSignInForm } from "./index";
import SignIn from "../../pages/signIn/index"


//execution avant chaque test
//lorsque ce code est exécuté dans le contexte d'une page web, le contenu de la page sera remplacé par le code HTML généré par la fonction render de l'objet SignInPage. 
beforeEach(() => {
  document.body.innerHTML = SignIn.render;
  handleSignInForm(); // ajoute un evenement clique 
})

//Execution apres chaque test , on vide le DOM
afterEach(() => {
  document.body.innerHTML = '';
})


describe('SignInForm Integration Test Suites', () => {

  //1er test
  it('should display the error message when the e-mail is not correct', () => {
    //Simulation d'une action du clavier
    /*
    on simule l'action de taper sur le clavier le message suivant 'thomas@thomas.com'
    sur le label "<label for="user-email">Votre addresse e-mail</label>" dans le dossier signinForm
    */
    userEvent.type(
      getByLabelText(document.body, 'Votre addresse e-mail'),
      'thomas@thomas.com'
    )

    //Simulation du clique de la sourie sur le formulaire 
    //clique sur le bouton : <button role="button" class="submit-btn" type="submit">Se connecter</button>
    userEvent.click(getByRole(document.body, 'button'))

    expect(
      //on recuper la class suivant : <span data-testid="user-email-error-msg"
      getByTestId(document.body, 'user-email-error-msg')
      //Et on test si la class suivante b, s'affiche : class="form-text-error hidden ...
    ).not.toHaveClass('hidden') //Et on test si la 
  })

  it('should not display the error message when the e-mail is correct but it should display the password error message', () => {
    userEvent.type(
      getByLabelText(document.body, 'Votre addresse e-mail'),
      'thomas@facadia.com'
    )

    userEvent.click(getByRole(document.body, 'button'))

    expect(
      getByTestId(document.body, 'user-email-error-msg')
    ).toHaveClass('hidden')

    expect(
      getByTestId(document.body, 'user-password-error-msg')
    ).not.toHaveClass('hidden')
  })

  it('should display the error message when the password is not correct', () => {
    userEvent.type(
      getByLabelText(document.body, 'Votre addresse e-mail'),
      'thomas@facadia.com'
    )

    userEvent.type(
      getByLabelText(document.body, 'Votre mot de passe'),
      'thomas'
    )

    userEvent.click(getByRole(document.body, 'button'))

    expect(
      getByTestId(document.body, 'user-password-error-msg')
    ).not.toHaveClass('hidden')
  })

  it('should not display any error messages since both email and password are correct', () => {
    userEvent.type(
      getByLabelText(document.body, 'Votre addresse e-mail'),
      'thomas@facadia.com'
    )

    userEvent.type(
      getByLabelText(document.body, 'Votre mot de passe'),
      'azerty'
    )

    userEvent.click(getByRole(document.body, 'button'))

    expect(
      getByTestId(document.body, 'user-email-error-msg')
    ).toHaveClass('hidden')

    expect(
      getByTestId(document.body, 'user-password-error-msg')
    ).toHaveClass('hidden')
  })
})








describe("Router Integration Test Suites", () => {
  //1er teste , je suis dans l'index et je ne suis pas connecté, le message : 
  //"Veuillez vous connecter" doit s'afficher
  it("should render the sign in page", async () => {
    //On recréer le body de notre index.html , on n'oublie pas le id "root" qui est utiliser dans 
    //le fichier index.html et aussi utiliser dans le fichier index.js dans le dossier "router"
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    await router(); // On attend et recupere tout nos chemins
    //Attention le matcher "sign-in-form-title" vient du formulaire dans le dossier "signinForm"
    expect(getByTestId(document.body, "#user-email")).toHaveTextContent("Veuillez vous connecter");

  });

});



