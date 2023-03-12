/*
Objectif des testes
Test 1 :
je suis deconnecter , sur la page de connection je souhaite tester mes login et mots de passe , voir si la conexion de fait corretement

Test 2 :
sur la page d'accueil DES capteurs , si le noeud avec la classe section-title est present 
sur la page d'accueil des capteurs  , si le noeud avec la classe section-title est present avec le titre  "Vos capteur"

Test 3 :
sur la page d'accueil D'UN capteur , si le noeud avec la classe section-title est present 
sur la page d'accueil d'un capteur   , si le noeud avec la classe section-title est present avec le titre  "Details du cpateur 7"
*/

module.exports = {
    test: client => {
        client
            .url('http://127.0.0.1:5500/') //on travail en local
            //on attend que la noeud "main-title" se charge
            .waitForElementVisible('.main-title', 10 * 1000)

            .assert.visible('input[type=email]')//Est ce que mon input est visible ?
            .setValue('input[type=email]', 'thomas@facadia.com')//est ce que mon login fonctionne ?
            .assert.visible('input[type=password]')//Est ce que mon input est visible ?
            .setValue('input[type=password]', 'azerty')//est ce que mon mdp fonctionne ?

            .assert.visible('button[type=submit]')//Est ce que mon input est visible ?
            .click('button[type=submit]')//Je teste le clique sur le boutton pour valider le formalaure de connection

            //Dans la page d'accueil Des capteurs
            //on attend que la noeud "main-title" se charge de la page d'accueil Des capteurs
            .waitForElementVisible('.section-title', 10 * 1000)
            .assert.textContains('.section-title', 'Vos capteurs')
            .assert.visible('.sensor-info-btn')
            .click('.sensor-info-btn')//On clique sur le bouton avec la class ".sensor-info-btn" de selection d'un cpateur pour se rendre sur la page D'UN capteur

            //Dans la page d'accueil D'un capteurs
            .waitForElementVisible('.section-title', 10 * 1000)
            .assert.textContains('.section-title', 'Détails du capteur #7')//est ce que le noeud ".section-title" contient "Détails du capteur #7"
            .end()
    }
}