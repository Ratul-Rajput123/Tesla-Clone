import React, { useState } from 'react'
import styled from 'styled-components';


function Header() {
    const [Set,Reset] = useState(true);
    return (
        <div>
            <Container>
                <a href="a"> <img alt="img" src="Tesla-Clone/images/logo.svg"></img> </a>
                <Menu>
                    <a href="a">Model S</a>
                    <a href="a">Model 3</a>
                    <a href="a">Model X</a>
                    <a href="a">Model Y</a>
                    <a href="a">Solar Roof</a>
                    <a href="a">Solar Panels</a>
                    <a href="a">Power Wall</a>
                </Menu>

                <LeftMenu>
                    <a href="a">Shop</a>
                    <a href="a">Account</a>
                </LeftMenu>

                <CustomMenu onClick={() => Reset(false)}>
                    Menu
                </CustomMenu>

                <MenuBar show={Set}>
                    <CloseWrapper>
                        <CloseIcon onClick={() => Reset(true)}>×</CloseIcon>
                    </CloseWrapper>
                    <li><a href="a">Trade-In</a></li>
                    <li><a href="a">Demo Drive</a></li>
                    <li><a href="a">Insurance</a></li>
                    <li><a href="a">Cybertruck</a></li>
                    <li><a href="a">Roadster</a></li>
                    <li><a href="a">Semi</a></li>
                    <li><a href="a">Charging</a></li>
                    <li><a href="a">Commercial Energy</a></li>
                    <li><a href="a">Utilities</a></li>
                    <li><a href="a">Find Us</a></li>
                    <li><a href="a"> Support</a></li>
                    <li><a href="a">Investor Relations</a></li>
                </MenuBar>

            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
 min-height:60px;
 position:fixed;
 display:flex;
 text-align:center;
 padding:30px; 
 z-index:1;
`
const Menu = styled.div`
 display:flex;
 text-align:center;
 justify-content:center;
 margin-left:60px;
 a{
   color:black;
  font-weight:600px;
  text-transform:uppercase;
  padding:5px;
  margin:5px;
  cursor:pointer;
 
 }
  a:hover{
     background-color:#BACDDB;
     opacity:70%;
     border-radius:2px;
  
 }

`

const LeftMenu = styled.div`
     display:flex;
     margin-left:50px;

     a{
         letter-spacing:3px;
         color:black;
         font-weight:600px;
         padding:10px;
         text-transform:uppercase;
         cursor:pointer;
     }

     a:hover{
     background-color:#BACDDB;
     opacity:40%;
     border-radius:2px;
    }
`

const CustomMenu = styled.div`
   margin-top:5px;
   letter-spacing:3px;
     font-weight:600px;
     text-transform:uppercase;
     color:black;
     padding:5px;
:hover{
     background-color:#BACDDB;
     opacity:40%;
     border-radius:2px;
     cursor:pointer;
    }
`

const MenuBar = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
display:flex;
flex-direction :column;
text-align:start;
padding :10px;
transform:${props => props.show ? 'translateX(100%)' : 'tanslateX(0%)'};
transition:transform 0.2s;

li{
    padding:10px;
    
    a {
        font-weight:600;
        letter-spacing:1px;
        padding:5px;
    }
    ${'' /* a:hover{
     background-color:#BACDDB; 
     opacity:90%;
     border-radius:2px;
     cursor:pointer;
     transition:0.30s; */}
    }
}
`
const CloseIcon = styled.div`
  display:flex;
  justify-content:flex-end;

  :hover{
     cursor:pointer;
    }
`

const CloseWrapper = styled.div`
`