/**
 * @jest-environment jsdom
 */

//TEST d'integration , on souhaite ici tester le formulaire

import "@testing-library/jest-dom";

import { getByTestId } from "@testing-library/dom"; //getByTestId est un queries

import { router } from "./index";

describe("Router Integration Test Suites", () => {
    //1er teste , je suis dans l'index et je ne suis pas connecté, le message : "Veuillez vous connecter" doit s'aaficher
  it("should render the sign in page", async () => {
    //On recréer le body de notre index.html , on n'oublie pas le id "root" qui est utiliser dans le fichier index.html 
    //et aussi utiliser dans le fichier index.js dans le dossier "router"
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    await router(); // On attend et recupere tout nos chemins
    //Attention le matcher  "sign-in-form-title" vient du formulaire dans le dossier "signinForm"
    expect(getByTestId(document.body, "#user-email")).toHaveTextContent("Veuillez vous connecter");

  });

});



