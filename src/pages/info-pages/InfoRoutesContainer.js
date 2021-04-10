import React, {lazy, Suspense} from 'react'
import { Router} from "@reach/router";

const TramitacionEnvios = lazy(()=> import("./TramitacionEnvios"))
const PoliticaCookies = lazy(()=> import('./PoliticaCookies'))
const PreguntasFrecuentes = lazy(()=> import('./PreguntasFrecuentes'))
const PoliticasPrivacidad = lazy(()=> import('./PoliticasPrivacidad'))
const PoliticasDevoluciones = lazy(()=> import('./PoliticasDevoluciones'))

const InfoRoutesContainer = () => {
    return (
        <div>
            <Router>
                <TramitacionEnvios path="/tramitacion-envios"/>
                <PoliticaCookies  path="/politica-cookies"/>
                <PoliticasDevoluciones  path="/politica-de-devoluciones"/>
                <PoliticasPrivacidad  path="/politicas-de-privacidad"/>
                <PreguntasFrecuentes  path="/preguntas-frecuentes"/>
            </Router>
        </div>
    )
}

export default InfoRoutesContainer
