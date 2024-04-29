import styled from "styled-components";

export const StyleContainer = styled.div`
margin-top: 30px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 20px;
color: #eee;
text-align: center;



.divContainer{
    background-color: rgba(0, 0, 0, 0.3);
    max-width: 1360px;
    width: 80%;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;


    @media(max-width: 460px){
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
}

iframe{
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out; 
   

    &:hover{
        transform: scale(1.1);
    }
}

#divApi{
    transition: transform 0.3s ease-in-out; 

    &:hover{
        transform: scale(1.1);
    }

}
a{
    color:  #eee;

   
}

footer{
    margin-bottom: 30px;

    p{
        font-size: 18px;
        margin-bottom: 12px;
    }
}



`