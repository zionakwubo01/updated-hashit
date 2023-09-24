import styled from "styled-components"
import waitlist from '../assset/waitlist-a41208d5.png'
import Wifi from "../assset/wifi-a041367d.svg"
import flight from "../assset/flight-96b8092f (1).svg"
const Hero = ()=>{
    return(
        <div>
<Container>
    <Wrapper>
<Super>
{/* <Flight src={flight} left="325px"></Flight> */}
    Supercharge Your<br/>Mobile Life with <span>HashIT!</span>
    {/* <Flight src={Wifi} top="170px" right= "200px"></Flight> */}

</Super>
<Image1 src={waitlist}></Image1>
<Text>
Level up your mobile experience with Hashit! Send money, buy airtime,
 pay utilities, save, earn, learn, connect with <br/>friends, explore
 our vibrant marketplace, advertise your biz, and win exciting
giveaways - all in one place.
</Text>
    </Wrapper>
</Container>
        </div>
    )
}

export default Hero;
const Flight = styled.img<{left?: string, right?: string, top?: string}>`
position: absolute;
left: ${({left})=>left};
right: ${({right})=>right};
top: ${({top})=>top};
@media 
`
const Super = styled.div`
// padding-top: 50px;
text-align: center;
color: black;
font-weight: bold;
font-size: 60px;
position: relative;
span{
    color: #EC5A24;
}
@media (max-width:320px){
    font-size: 20px;
    text-align: center;
}
@media (max-width:375px){
    font-size: 20px;
    text-align: center;
}
@media (max-width: 414px){
    font-size: 20px;
    text-align: center;
}
`
const Text = styled.div`
text-align: center;
font-size: 15px;
font-weight: 500;
padding-top: 30px;
padding-bottom: 40px;
@media (max-width: 320px){
    font-size: 12px;
text-align: center;
}
@media (max-width: 375px){
    font-size: 12px;
text-align: center;
}
@media (max-width: 414px){
    font-size: 12px;
text-align: center;
}
`
const Image1 = styled.img`
@media (max-width: 320px){
    width: 90%;
    height: 80%;
    margin-top: 20px;
}
@media (max-width: 375px){
    width: 90%;
    height: 90%;
    margin-top: 20px;
}
@media (max-width: 414px){
    width: 90%;
    height: 90%;
    margin-top: 20px;
}
`
const Wrapper = styled.div`
height: ;
width: 87%;
// background-color: red;
display: flex;
justify-content: center;
// align-items: center;
flex-direction: column;
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
@media (max-width: 414px){
    width: 87%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
`

const Container = styled.div`
min-height: ;
width: 100%;
background-color: #EEEEEE;
display: flex;
z-index: 3;
padding-top: 100px;
aliugn-items: center;
justify-content: center;
@media (max-width: 320px){
    width: 100%;
   
}
@media (max-width: 375px){
    width: 100%;
   
}
@media (max-width: 414px){
    width: 100%;
   
}
`