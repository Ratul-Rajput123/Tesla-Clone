import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtn, rghtBtn, bgImg }) {
    return (
        <div>
            <Wrap bgImg={bgImg}>
                <Fade bottom>
                    <ItemText>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <Fade bottom>
                        <ButtonGroup>
                            <LeftButton>
                                {leftBtn}
                            </LeftButton>
                            <RightButton>
                                {rghtBtn}
                            </RightButton>
                        </ButtonGroup>
                    </Fade>
                    <DownArrow src="Tesla-Clone/images/down-arrow.svg" />
                </Buttons>

            </Wrap>
        </div>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-image:${props => `url("Tesla-Clone/images/${props.bgImg}")`};
background-size:cover;
background-position:center;
background-repeat :no-repeat;
display:flex;
flex-direction:column;
justify-content: space-between // vertical;
`

const ItemText = styled.div`
padding-top : 15vh;
text-align : center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom :30px;
justify-content :center;
@media(max-width:770px){
    flex-direction:column;
}
`
const LeftButton = styled.div`
background-color:rgba(23, 26, 32, 0.8);
color:white;
opacity:93%;
width:250px;
height : 38px;
display: flex;
justify-content:center;
align-items:center; 
font-size:14px;
cursor:pointer;
text-transform:uppercase;
margin:10px;
`
const RightButton = styled(LeftButton)`
background-color:white;
color:black;
opacity:93%;
`
const DownArrow = styled.img`
margin-top:10px;
height : 40px;
animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`
`