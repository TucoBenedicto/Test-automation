
# GITHUB

<span style="color:green">*…or create a new repository on the command line*</span>.

> echo "# Test-automation" >> README.md

> git init

> git add README.md

> git commit -m "first commit"

> git branch -M main

> git remote add origin https://github.com/TucoBenedicto/Test-automation.git

> git push -u origin main


<span style="color:green">*…or push an existing repository from the command line*</span>.

>git remote add origin https://github.com/TucoBenedicto/Test-automation.git

>git branch -M main

>git push -u origin main

(j'ai changer le "origin" (qui est le "local name of the remote repository" du depot openclassroom) par "clone" pour etre etre envoyer sur mon repository "push" sur mon depot) soit sa: 

> git remote add clone https://github.com/TucoBenedicto/Test-automation.git

au lieu de sa:
git remote add origin https://github.com/TucoBenedicto/Test-automation.git

pour finir un push :
(-u = upstream)
comprendre l'upstream : https://code-garage.fr/blog/a-quoi-sert-le-parametre-u-lors-d-un-git-push/#:~:text=Lorsque%20l%27on%20pousse%20les,appelle%20"l%27upstream".
> git push -u clone main

 (uniquemenent la 1ere fois) , puis le restant du temps :
> git push clone
(!! a faire pour chaque nouvelle branche !!)

## Protocole pour pull mon repo sur un ordinateur

faire un clone du repo

> git clone https://github.com/TucoBenedicto/Test-automation.git
(j'obtient mon local repository qui s'appelra "origin")

je change le nom de mon local repository "origin" pour l'appeler "clone" 

> git remote rename origin clone

(car le nom du local repository de openclassroom s'appel deja origin , il risque dy avoir un conflit)

j'ajoute le repository de openclassroom

> git remote add origin https://github.com/OpenClassrooms-Student-Center/testez-vos-applications-front-end-avec-javascript.git

(changer l'url d'un local repository : git remote set-url origin https://github.com/OpenClassrooms-Student-Center/testez-vos-applications-front-end-avec-javascript.git)

et pour finir un "pull" pour recuperer toutes les branches et les mettre dans le local repository (origin)

> git pull origin

recuperer toutes les branches du depot (reposotory) distant (de chez openclassroom)

> git fetch --all


# testez-vos-applications-front-end-avec-javascript
Code source de Façadia - le projet fil rouge du cours "Testez vos applications Front End avec Javascript" 
