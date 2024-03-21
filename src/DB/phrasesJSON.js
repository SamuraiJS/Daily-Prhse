/*
Funciona bien solo que como es una promesa al cambiar de estado el json no lo tiene en cuenta
import {createClient} from 'pexels'
const client = createClient('A9yADwQIVmus54CmWFWWLYf5OZGOkyfJ5jKltACqtI17EshWZaCCb8WI');
client.photos.show({id : 11641541}).then(photo => photo.src.small);
*/

import MarcoAureilio from "../../public/marco-aurelio.jpg";
import Zenon from "../../public/zenon.jpg";
import Seneca from "../../public/seneca.jpg";
import Musonio from "../../public/musonio.jpg";
import Epicteto from "../../public/epicteto.jpg";


export const phrases = [
    {
        id: 1,
        phrase: "No malgastes más tiempo argumentando acerca de lo que debe ser un buen hombre. Trata de ser uno.",
        author: "Marco Aurelio",
        srcImg: MarcoAureilio,
        from: "Crono Viento",
    },
    {
        id: 2,
        phrase: "El hombre conquista el mundo al conquistarse a si mismo.",
        author: "Zenón de Citio",
        srcImg: Zenon,
        from: "Crono Viento",
    },
    {
        id: 3,
        phrase: "Los hombres no tienen miedo de las cosas, sino de cómo las ven.",
        author: "Séneca",
        srcImg: Seneca,
        from: "Crono Viento",
    },
    {
        id: 4,
        phrase: "La verdad triunfa por sí misma, la mentira necesita siempre complicidad.",
        author: "Epicteto",
        srcImg: Epicteto,
        from: "Crono Viento",
    },
    {
        id: 5,
        phrase: "Si logras algo con trabajo puede que el resultado no dure mucho, pero el bien perdura. Si hacés algo vergonzoso con el objetivo de obtener placer, el placer pasa rápidamente, pero la vergüenza se queda.",
        author: "Musonio Rufo",
        srcImg: Musonio,
        from: "Crono Viento",
    },
    {
        id: 6,
        phrase: "No es que tengamos poco tiempo, sino que perdemos mucho.",
        author: "Séneca",
        srcImg: Seneca,
        from: "Crono Viento",
    },
    {
        id: 7,
        phrase: "A menudo tenemos más miedo que dolor; y sufrimos más en la imaginación que en la realidad.",
        author: "Séneca",
        srcImg: Seneca,
        from: "Crono Viento",
    },
    {
        id: 8,
        phrase: "Una gema no puede ser pulida sin fricción, ni un hombre perfeccionado sin pruebas. ",
        author: "Séneca",
        srcImg: Seneca,
        from: "Crono Viento",
    },
    {
        id: 9,
        phrase: "Te conviertes en lo que le das a tu atención.",
        author: "Epicteto",
        srcImg: Epicteto,
        from: "Crono Viento",
    },
    {
        id: 10,
        phrase: "El deseo y la felicidad no pueden vivir juntos.",
        author: "Epicteto",
        srcImg: Epicteto,
        from: "Crono Viento",
    },
    

]