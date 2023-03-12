module.exports = {
  test: client => {
      client
          .url('https://duckduckgo.com/') //on realise nos Test sur le site duckduckgo

          //on attend que le logo apparait , on recupere l'id "#logo_homepage_link" (dans le dom) de la page source et on ajoute un delai de 10 * 1000
          .waitForElementVisible('#logo_homepage_link', 10 * 1000)

          //alors on teste si l'input sur la page d'accueil est visible
          .assert.visible('input[type=text]')
          //dans ce meme input on teste si le input fait bien sa recherche , pour cela on test avec le mot 'hello world'
          .setValue('input[type=text]', 'hello world')

          //on test si le bouton de validation de la page d'accueil est visible
          .assert.visible('input[type=submit]')
          //on test si le clique sur le bouton fonctionne
          .click('input[type=submit')

          //on attend que les resulats (hello world) s'affiche bien , grace à la classe '.results--main' , que l'on recuper dans le dom , apres avoir tapé "hello wolrd dans le input"
          .waitForElementVisible('.results--main')
          //est ce que le 1er noeud  qui à l'id "#r1-0" est visible ?.
          .assert.visible('#r1-0')
          //est ce que le 1er noeud qui à l'id "#r1-0" avec à l'interieur le noeud ".result__a" est visible ? .
          //attention dans le TP il parle de la class ".result__a" , elle est remplacer par "Rn_JXVtoPVAFyGkcaXyK" dans la nouvelle version de duckduckgo
          //.Rn_JXVtoPVAFyGkcaXyK = class d'un lien
          .assert.visible('#r1-0 .Rn_JXVtoPVAFyGkcaXyK')
          //je teste si la class .EKtkFWMYpwzMKOYr0GYm est visible
          .assert.visible('#r1-0 .EKtkFWMYpwzMKOYr0GYm')
          //est ce que le sous noeud ".EKtkFWMYpwzMKOYr0GYm" du noeud "#r1-0" contient le text 'Hello world — Wikipédia'
          .assert.textContains('#r1-0 .EKtkFWMYpwzMKOYr0GYm','Hello world — Wikipédia')

          //on simule un clique sur notre lien , en cliquant il va nous renvyer vers le site "wikipedia" avec la recherche "hello world"
          .click('#r1-0 .Rn_JXVtoPVAFyGkcaXyK')
          //je teste si l'ID #firstHeading est visible sur la page wikipedia
          .assert.visible('#firstHeading')
          //est ce l'id #firstHeading (dans le site wikipedia) contien le text "hello world"
          .assert.textContains('#firstHeading', 'Hello world')
  }
}