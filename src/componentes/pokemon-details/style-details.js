import styled from "styled-components";

const ButReturn = styled.button`
    padding: 15px 15px;
    border-radius: 10px;
    border: 0;
    font-size: 18px;
    cursor: pointer;
    background-color: #0000FF;
    color: white;
    transition: 0.3s ease-in-out;
    &:hover{
        padding: 18px 18px;
    }
    @media (max-width: 780px) {
        font-size: 15px;
        padding: 12px 12px;
        &:hover{
            padding: 15px 15px;
        }
    }
    @media (max-width: 490px){
        margin-bottom: 20px;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 15px 0 50px 0;
    @media (max-width: 780px) {
        flex-direction: column;
        margin-bottom: 70px;
    }
`

const ImgLogo = styled.img`
    width: 250px;
    @media (max-width: 780px) {
        margin-bottom: 20px;
    }
`

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 130px;
    @media (max-width: 1020px) {
        flex-direction: column;
    }
`

const P = styled.p`
    padding: 4px;
    color: #0000FF;
    font-size: 23px;
    background-color: #DAA520;
    width: 290px;
    border-radius: 0 0 15px 15px;
    font-weight: 400;
    @media (max-width: 490px){
        width: 210px;
        font-size: 20px;
    }
`

const H3 = styled.h3`
    font-size: 23px;
    font-weight: 700;
    @media (max-width: 490px){
        margin-bottom: 12px;
    }
`

const DivAbilities = styled.div`
    max-width: 840px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 70px;
    border: solid 5px #DAA520;
    border-radius: 8px;
    padding: 15px;
    color: white;
    margin-top: 34px;
    box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.2);
    @media (max-width: 1020px) {
        margin: 0;
    }
`

const NameP = styled.p`
    text-transform: capitalize;
    position: absolute;
    top: -275px;
    width: 290px;
    font-weight: 400;
    font-size: 23px;
    color: #0000FF;
    padding: 4px;
    background-color: #DAA520;
    border-radius: 15px 15px 0 0;
    @media (max-width: 490px){
        width: 210px;
        top: -200px;
        font-size: 20px;
    }
`

const Img = styled.img`
    background-position: left;
    border-radius: 15px;
    width: 290px;
    height: 300px;
    border: solid 5px #DAA520;
    @media (max-width: 490px){
        width: 210px;
        height: 220px;
    }
`

const Strong = styled.strong`
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    @media (max-width: 490px){
        font-size: 19px;
    }
`

const Span = styled.span`
    color: red;
    font-size: 23px;
    text-transform: capitalize;
    @media (max-width: 490px){
        font-size: 20px;
        font-weight: 400;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px;
    @media (max-width: 490px){
        padding: 20px;
     }
`

const Li = styled.li`
    padding: 20px;
    font-size: 26px;
    text-transform: capitalize;
    @media (max-width: 490px){
       width: 100%;
       padding: 15px;
    }
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 490px){
        justify-content: flex-start;
    }
`

const DivCard = styled.div`
    position: relative;
    text-align: center;
    border-radius: 15px;
    box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.2); 
    
`

const DivInfo = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
`

const EffectP = styled.p`
    padding: 25px;
    font-size: 20px;
    @media (max-width: 490px){
        font-size: 18px;
        padding: 15px;
    }
`

const H2 = styled.h2`
    font-size: 28px;
    margin: 110px 0 45px 0;
    font-weight: 700;
`

export {ButReturn, Div, DivAbilities, DivContainer, DivCard, DivInfo, EffectP, H2, H3 ,Header, Img, Li,
NameP, P, Span, Strong, Ul, ImgLogo}
