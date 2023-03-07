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
    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent("Veuillez vous connecter");
  });

  //2eme teste, à la page "#/home " , je veux qu'il s'affiche le message "vos capteur"
  it("should render the sensors home page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;
    document.location = "/#/home";//on precise la location de cette page pour tomber dessus lors du test

    await router();
    //Attention le matcher  "home-sensors-title" vient du text "index.js" dans le dossier "pages/home"
    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs"
    );
  });

  //3eme teste, à la page "#/home " , je veux qu'il s'affiche le message "vos capteur"
  it("should render the sensor page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    document.location = "/#/facade-details";

    await router();
    //Attention le matcher  "home-sensors-title" vient du text "index.js" dans le dossier "pages/facadeDetails"
    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur #7"
    );
  });

  //4eme teste, à la page "#/home " , je veux qu'il s'affiche le message "vos capteur"
  it("should render the add sensor page", async () => {
    document.body.innerHTML = `
            <div id="root"></div>
        `;

    document.location = "/#/add-sensor";

    await router();
    //Attention le matcher  "add-sensors-title" vient du text "index.js" dans le dossier "pages/addSensor"
    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur"
    );
  });

});
