import styled from "styled-components"

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 30px 40px 20px 40px;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
    padding: 40px;
    @media (max-width: 490px){
        margin: 50px 10px 50px 10px;
        padding: 0;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`


const Header = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;
    @media (max-width: 920px){
        flex-direction: column;
    }
    @media (max-width: 490px){
        margin: 0 10px;
    }
`

const Input = styled.input`
    border-radius: 10px;
    height: 55px;
    width: 270px;
    padding: 3px 10px;
    @media (max-width: 490px){
        height: 35px;
        width: 200px;
     }
`

const Li = styled.li`
    border-radius: 12px;
    text-transform: capitalize;
    box-shadow: 2px 8px 6px 1px rgba(0, 0, 0, 0.2); 
    display: flex;
    font-size: 35px;
    flex-direction: column;
    align-items: center;
    border: solid 2px black;
    padding: 13px;
    background-color: #C0C0C0;
    transition: 0.5s ease-in-out;
    &:hover{
        color: #00008B;
        background-color: #DAA520;
        margin-bottom: 30px;
        font-weight: 400;
    }
    @media (max-width: 490px){
        font-size: 22px;
    }
    `

const ButReturn = styled.button`
    padding: 10px 14px; 
    font-size: 20px;
    border-radius: 10px;
    background-color: #00008B;
    color: #ffff;
    border: 0;
    cursor: pointer;
    margin: 25px;
    @media (max-width: 490px){
        font-size: 17px;
        padding: 8px 12px;
        margin: 0 22px 0 0;
    }
`

const Button = styled.div`
    padding: 15px 20px 15px 20px;
    background-color: #4F4F4F;
    color: #C0C0C0;
    font-size: 35px;
    font-weight: 400;
    border-radius: 10px;
    margin-bottom: 40px;
    cursor: pointer;
    &:hover{
        color: #6A5ACD;
    }
    @media (max-width: 490px){
        font-size: 23px;
        padding: 10px 15px 10px 15px;
    }
`

const DivSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 920px){
        margin-top: 30px;
    }
    @media (max-width: 490px){
        flex-direction: column;
        gap: 20px;
    }
`

const ButSearch = styled.button`
    padding: 12px 18px;
    font-size: 18px;
    background-color: #0000FF;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    @media (max-width: 490px){
        font-size: 14px;
    }
`

const ImgLogo = styled.img`
    width: 450px;
    @media (max-width: 490px){
        width: 300px;
    }
` 

const P = styled.p`
    font-size: 40px;
    color: red;
    @media (max-width: 490px){
        font-size: 20px;
    }
`

const ImgPokemon = styled.img`
    width: 220px;
    @media (max-width: 490px){
        width: 140px;
    }
`


export { Ul, Div, Li, Button, Header, Input, ButSearch, ImgLogo, P, DivSearch, ImgPokemon, ButReturn }