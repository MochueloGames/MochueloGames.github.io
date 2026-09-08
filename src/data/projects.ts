import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "Guard my Hive",
        summary: "Un tower defense en el que tendrás que defender la colmena de su Majestad, Beeatriz",
        image: '/src/assets/Logo_Bea_Grande.png',
        tags: ['Tower Defense', 'Single Player', 'Auto Battler'],
        links: [
            {label: 'Page', url: '/'},
            {label: 'Demo', url: "https://youtu.be/dQw4w9WgXcQ"}
        ],
    },
    {
        id: 2,
        title: "Jam 1",
        summary: "Lorem impsum noseque nosecual bliblibla bahbeie bzzzz abejas abejas avispas rojas cañonero boom boom",
        image: '/src/assets/logo_oscuro.png',
        tags: ['Jam', 'Single Player', 'Auto Battler'],
        links: [
            {label: 'Page', url: '/'},
            {label: 'Demo', url: "https://youtu.be/dQw4w9WgXcQ"}
        ],
    },
    {
        id: 3,
        title: "Jam 2",
        summary: "Lorem impsum noseque nosecual bliblibla bahbeie bzzzz abejas abejas avispas rojas cañonero boom boom",
        image: '/src/assets/logo_azul.png',
        tags: ['Jam', 'Single Player', 'Auto Battler'],
        links: [
            {label: 'Page', url: '/'},
            {label: 'Demo', url: "https://youtu.be/dQw4w9WgXcQ"}
        ],
    },
]