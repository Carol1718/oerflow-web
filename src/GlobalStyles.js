import { createGlobalStyle, createGlobalStyleComponent } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --primary: #Fe0000;
    --textPrimary: #000000;
}
*{

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

}
 body{
     font-family: sans-serif;
     color: var(--textPrimary);

 }

 button {
        padding: 10px;
        font-weight: bold;
        background-color: transparent;
        border: 2px solid var(--textPrimary);
        color: var(--textPrimary);
        cursor: pointer;

        :hover{
            border: 2px solid var(--primary);
            color: var(--primary); 
        }
        :active{
            transform: scale(0.95);
        }
    }

`;