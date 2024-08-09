import * as React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Main} from "../components/Main";
import {PrintHouseList} from "../components/printHouse/PrintHouseList";
import {PrintHouse} from "../components/printHouse/PrintHouse";

import {printHousesData} from "../data/printHousesData";
import {outSourcedProductsData} from "../data/outSourcedProductsData";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/lista-drukarni",
        element: <PrintHouseList/>
    },
    {
        path: "/web-to-print",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["web-to-print"]}
                             printHouseData={printHousesData["web-to-print"]}/>
    },
    {
        path: "/drukexpress",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["drukexpress"]}
                             printHouseData={printHousesData["drukexpress"]}/>
    },
    {
        path: "/wydrukujemyto",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["wydrukujemyto"]}
                             printHouseData={printHousesData["wydrukujemyto"]}/>
    },
    {
        path: "/drukujtaniej",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["drukujtaniej"]}
                             printHouseData={printHousesData["drukujtaniej"]}/>
    },
    {
        path: "/printagram",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["printagram"]}
                             printHouseData={printHousesData['printagram']}/>
    },
    {
        path: "/kserkop",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["kserkop"]}
                             printHouseData={printHousesData["kserkop"]}/>
    },
    {
        path: "/spiroprint",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["spiroprint"]}
                             printHouseData={printHousesData["spiroprint"]}/>
    },
    {
        path: "/e-druk",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["e-druk"]}
                             printHouseData={printHousesData["e-druk"]}/>
    },
    {
        path: "/piga",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["piga"]}
                             printHouseData={printHousesData["piga"]}/>
    },
    {
        path: "/tudrukuje",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["tudrukuje"]}
                             printHouseData={printHousesData["tudrukuje"]}/>
    },
    {
        path: "/futura",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["futura"]}
                             printHouseData={printHousesData["futura"]}/>
    },
    {
        path: "/printeo",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["printeo"]}
                             printHouseData={printHousesData["printeo"]}/>
    },
    {
        path: "/krantom",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["krantom"]}
                             printHouseData={printHousesData["krantom"]}/>
    },
    {
        path: "/multiprint",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["multiprint"]}
                             printHouseData={printHousesData["multiprint"]}/>
    },
    {
        path: "/kupulotki",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["kupulotki"]}
                             printHouseData={printHousesData["kupulotki"]}/>
    },
    {
        path: "/rgbdruk",
        element: <PrintHouse outSourcedProductsData={outSourcedProductsData["rgbdruk"]}
                             printHouseData={printHousesData["rgbdruk"]}/>
    },
]);

export const Routes = () => {
    return <RouterProvider router={router}/>;
};