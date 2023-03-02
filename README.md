
# GITHUB
…or create a new repository on the command line
echo "# Test-automation" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TucoBenedicto/Test-automation.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/TucoBenedicto/Test-automation.git
git branch -M main
git push -u origin main

(j'ai changer le "origin" (qui est le "local name of the remote repository" du depot openclassroom) par "clone" pour etre etre envoyer sur mon repository "push" sur mon depot) soit sa: 
git remote add clone https://github.com/TucoBenedicto/Test-automation.git
au lieu de sa:
git remote add origin https://github.com/TucoBenedicto/Test-automation.git

pour finir un push :
(-u = upstream)
comprendre l'upstream : https://code-garage.fr/blog/a-quoi-sert-le-parametre-u-lors-d-un-git-push/#:~:text=Lorsque%20l%27on%20pousse%20les,appelle%20"l%27upstream".
git push -u clone main


# testez-vos-applications-front-end-avec-javascript
Code source de Façadia - le projet fil rouge du cours "Testez vos applications Front End avec Javascript" 
