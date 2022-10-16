import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    padding: 10%;
    background-color: darkgreen;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

        button{
            margin-top: 50px;
            border-radius:5px;
            display:flex;
            justify-content:center;
            align-items: center;
            background-color: purple;
            color: #FFFFFF;
            font-weight: bold;
            font-size: 1.5rem;
            cursor: pointer;
        }

        h1{
            font-size: 2rem;
            color: lightcoral;
            font-weight: bold;
            margin:50px 0;
        }

        a{
            font-size: 1.5rem;
            color: #FFFFFF;
            font-weight: bold;
            margin-bottom:20px;
            background-color: purple;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
        }
`;