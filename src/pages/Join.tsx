import styled from "styled-components"
import {BsPerson} from 'react-icons/bs'
import {BsMailbox} from 'react-icons/bs'
import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
const Join = ()=>{
    return(
        <div>
<Container>
    <Wrapper>
 <Text>
 Join the waitlist for<br/>
<span>HashIT!</span>
 </Text>

<Inputholder>
<Can>
<BsPerson/>
</Can>
 <input type="text" placeholder="Full name"/>
</Inputholder>
<Inputholder>
<Can>
<BsMailbox/>
</Can>
 <input type="text" placeholder="Email Address"/>
</Inputholder>
<button>Get notified when HashIT is live</button>
<Logos>
    <FaFacebook/>
<FiInstagram/>
<FaTwitter/>
<FaLinkedin/>
</Logos>
    </Wrapper>
</Container>
        </div>
    )
}

export default Join;
const Logos = styled.div`
height:;
// background-color: red;
font-size: 30px;
display: flex;
align-items: center;
flex-direction: row;
gap: 20px;
@media (max-width: 320px){
    min-width: ;
}
@media (max-width: 375px){
   min-width:;
}
@media (max-width: 414px){
   min-width:;
}
`
const Can = styled.div`
color: black;
padding-left: 40px;
font-size: 18px;
`
const Inputholder = styled.div`
height: 45px;
width: 390px;
background-color: ;
display: flex;
align-items: center;
border: 1px solid gray;
// justify-content: space-around;
gap: 10px;
input{
    height: 50px;
    width: 80%;
    border: 0;
    background-color: transparent;
    outline: 0;
    color: gray;
    font-size: 15px;
    @media (max-width: 320px){
        width: 100%;
    }
    @media (max-width: 375px){
        width: 100%;
    }
    @media (max-width: 414px){
        width: 100%;
    }
}
@media (max-width: 320px){
    width:80%;
}
@media (max-width: 375px){
    width:80%;
}
@media (max-width: 414px){
    width:80%;
}
`
const Text = styled.div`
text-align: center;
font-size: 60px;
padding-top: 50px;
color: black;
font-weight: bold;
span{
    color: #EC5A24;

}
@media (max-width: 320px){
    font-size: 20px;
}
@media (max-width: 375px){
    font-size: 20px;
}
@media (max-width: 414px){
    font-size: 20px;
}
`


const Wrapper = styled.div`
height: ;
width: 87%;
// background-color: red;
display: flex;
align-items: center;
flex-direction: column;
gap: 30px;
button{
    height: 50px;
    width: 395px;
    border-radius: 10px;
    border: 0;
    background-color: black;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 320px){
        width: 70%;
        font-size: 10px;
    }
    @media (max-width: 375px){
    width: 80%;
        font-size: 10px;
    }
}
@media (max-width: 320px){
    width: 87%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
@media (max-width: 375px){
    width: 87%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
`
const Container = styled.div`
height: ;
width: 100$;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
@media (max-width: 320px){
    width: 100%;
}
@media (max-width: 375px){
    width: 100%;
}
`