import { Inicio } from "../pages/Inicio";
import { Especialidades } from "../pages/Especialidades";
import { Equipo } from "../pages/Equipo";
import { Planes } from "../pages/Planes";
import { Tecnologia } from "../pages/Tecnologia";
import { Cita } from "../pages/Cita";

export let router = [
    {
        path: "/",
        element: <Inicio />
    },
    {
        path: "/especialidades",
        element: <Especialidades />
    },
    {
        path: "/equipo",
        element: <Equipo />
    },
    {
        path: "/planes",
        element: <Planes />
    },
    {
        path: "/tecnologia",
        element: <Tecnologia />
    },
    {
        path: "/cita",
        element: <Cita />
    },
]