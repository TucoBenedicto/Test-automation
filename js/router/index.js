import SignIn from '../pages/signIn/index.js'
import Home from '../pages/home/index.js'
import AddSensor from '../pages/addSensor/index.js'
import ErrorPage from '../pages/404/index.js'
import FacadeDetails from '../pages/facadeDetails/index.js'

import { handleSignInForm } from '../utils/signInForm/index.js'

const routes = [
    {
        path: "/",
        component: SignIn
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/add-sensor",
        component: AddSensor
    },
    {
        path: "/facade-details",
        component: FacadeDetails
    },
]

/*
Ce code définit une fonction appelée parseLocation qui analyse l'URL actuelle de la page web et renvoie une chaîne de caractères 
représentant l'emplacement courant dans l'application.
Plus précisément, la fonction utilise la propriété location.hash pour obtenir la partie de l'URL qui suit le symbole "#" 
(aussi appelé fragment d'URL). La méthode slice(1) est utilisée pour supprimer le "#" de la chaîne. Ensuite, la méthode 
toLocaleLowerCase() est utilisée pour convertir la chaîne en minuscules, ce qui peut faciliter la comparaison de chaînes ultérieure.
Si la chaîne résultante est vide ou falsy (c'est-à-dire undefined, null, 0, false, ou une chaîne vide), 
la fonction renvoie le caractère "/" qui représente l'emplacement par défaut de l'application.
*/
const parseLocation = () => location.hash.slice(1).toLocaleLowerCase() || '/' 
// en fonction du chemin on trouve le bon element
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const bindEventListener = () => {
    if (parseLocation() === '/') {
        handleSignInForm()
    }
}

export const router = async () => {
    // Find the component based on the current path
    const path = parseLocation()

    // If there is not matching route, get the "Error" Component
    const { component = ErrorPage } = findComponentByPath(path, routes) || {}
    
    // Render the component in the app placeholder
    document.querySelector('#root').innerHTML = await component.render()

    // Finally bind the app event listeners
    bindEventListener()
}
