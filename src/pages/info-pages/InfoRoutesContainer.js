import React, {lazy} from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";

const TramitacionEnvios = lazy(()=> import("./TramitacionEnvios"))
const PoliticaCookies = lazy(()=> import('./PoliticaCookies'))
const PreguntasFrecuentes = lazy(()=> import('./PreguntasFrecuentes'))
const PoliticasPrivacidad = lazy(()=> import('./PoliticasPrivacidad'))
const PoliticasDevoluciones = lazy(()=> import('./PoliticasDevoluciones'))

const InfoRoutesContainer = () => {
    return (
        <div>
            <Switch>
                <Route component={TramitacionEnvios} path="/tramitacion-envios"/>
                <Route component={PoliticaCookies}  path="/politica-cookies"/>
                <Route component={PoliticasDevoluciones}  path="/politica-de-devoluciones"/>
                <Route component={PoliticasPrivacidad}  path="/politicas-de-privacidad"/>
                <Route component={PreguntasFrecuentes}  path="/preguntas-frecuentes"/>
            </Switch>
        </div>
    )
}

export default InfoRoutesContainer
