import logo from "../assset/logo-black-12822108.svg"
import styled from "styled-components"
import {FaCircle} from "react-icons/fa"
import {FiSun} from "react-icons/fi"
const Header = ()=>{
    return(
        <div>
<Container>
    <Wrapper>
     <Logo src={logo}>

     </Logo>
     <Togle>
<Can>
<FaCircle/>
</Can>
<Can>
<FiSun/>
</Can>
     </Togle>
    </Wrapper>
</Container>
        </div>
    )
}

export default Header;
const Can = styled.div`
font-size:22px;
color: black;
@media (max-width: 320px){
   font-size: 13px;
}
@media (max-width: 375px){
   font-size: 13px;
}
@media (max-width: 414px){
   font-size: 13px;
}
`
const Togle = styled.div`
height: 35px;
width: 73px;
background-color: #F2F2F2;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
@media (max-width: 320px){
   width: 50px;
   height: 20px;

}
@media (max-width: 375px){
   width: 50px;
   height: 20px;

}
@media (max-width: 414px){
   width: 50px;
   height: 20px;

}
`
const Logo = styled.img`
@media (max-width: 320px){

    
}
@media (max-width: 375px){
  
    
}
@media (max-width: 414px){

    
}
`
const Wrapper = styled.div`
height: 100%;
width: 87%;
// background-color: gray;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 320px){
    width: 87%;
    height: 100%;
}
@media (max-width: 375px){
    width: 87%;
    height: 100%;
}
@media (max-width: 414px){
    width: 87%;
    height: 100%;
}
`
const Container = styled.div`
height: 90px;
width: 100%;
background-color: white;
display: flex; 
position: fixed;
z-index: 2;
align-items: center;
justify-content: center;
@media (max-width: 320px){
    width: 100%;
    height: 50px;

}
@media (max-width: 375px){
    width: 100%;
    height: 50px;

}
@media (max-width: 414px){
    width: 100%;
    height: 50px;

}
`