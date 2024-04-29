import React from "react";
import { Bodycontainer } from "./Body/BodyContainer";
import { StyleContainer } from "./StyleContainer"; 



export const Container = () => { 

    return (
        <>
        <Bodycontainer />
        <StyleContainer>
           
           <div className="divContainer">
           <h1> API - Global</h1>
           </div>
         
            <div id="divApi" className="divContainer">
                <a href="https://apitoglobal-1.onrender.com/" target="_blank" rel="noreferrer">https://apitoglobal-1.onrender.com/</a>
            </div>

            <div className="divContainer">         

            <iframe title="api-global-RS" width="620" height="410" src="https://app.powerbi.com/view?r=eyJrIjoiYzcyYTQxYjItZGY5My00ZTBiLWIwMGYtOTM1MDc0MGE1NjkyIiwidCI6IjFiNDczYWY3LTlmNGMtNDZkZC04ZjQ4LThlMjdmZjcxM2M4MCJ9" frameborder="0" allowFullScreen="true" />

            <iframe title="api-global-RS2" width="620" height="410" src="https://app.powerbi.com/view?r=eyJrIjoiNzE2OTEzY2UtMDVjMC00YzAyLWI4NjgtM2I1YjUwMjQ0ZDkxIiwidCI6IjFiNDczYWY3LTlmNGMtNDZkZC04ZjQ4LThlMjdmZjcxM2M4MCJ9" frameborder="0" allowFullScreen="true" />

            <iframe title="api-global-RS3" width="620" height="426" src="https://app.powerbi.com/view?r=eyJrIjoiMjQ0YzM5MWUtNmRiOC00ZGY3LTg4MjQtZDZjMzI0MGQ0NjlmIiwidCI6IjFiNDczYWY3LTlmNGMtNDZkZC04ZjQ4LThlMjdmZjcxM2M4MCJ9" frameborder="0" allowFullScreen="true" />
            </div>

            <footer className="divContainer">
                <p>Wendell Souza - Desenvolvedor Full Stack</p>
                {/* <p><b><a href="https://www.wendellsouza.com" target="_blank" rel="noreferrer">www.wendellsouza.com</a></b></p> */}
                <p>&copy; 2024  - Todos os direitos reservados</p>
            </footer>
        </StyleContainer>
        </>
    )
}