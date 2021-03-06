import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
         <Logo src='/images/logo.svg'/>
         <NavMenu>
<a>

  <img src ='/images/home-icon.svg'/>
<span>HOME</span>
</a>
<a>

  <img src ='/images/search-icon.svg'/>
<span>SEARCH</span>
</a>
<a>

  <img src ='/images/watchlist-icon.svg'/>
<span>WATCHLIST</span>
</a>
<a>

  <img src ='/images/original-icon.svg'/>
<span>ORIGINAL</span>
</a>
<a>

  <img src ='/images/movie-icon.svg'/>
<span>MOVIES</span>
</a>
<a>

  <img src ='/images/series-icon.svg'/>
<span>SERIES</span>
</a>



         </NavMenu>
         <UserImg src='/images/profile.jpg'/>
    </Nav>
  )
}

export default Header
const Nav=styled.nav` 
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36pxc `

const Logo=styled.img`

width:80px;
 `
 const NavMenu=styled.div`
 display:flex;
 flex:1;
 margin-left:25px;
 align-items:center;

 a{
  display:flex;
  align-items:center;
  padding:0 12px;
  cursor:pointer;  
  img{ 
  height:20px;
  }
  span{
    font-size:13px;
    letter-spacing:1.42px;
    position:relative;
    &:after{
      content:"";
    height:2px;
    position:absolute;
    //top:0;
    background:white;
    border-radius:20%;
    left:0;
    right:0;
    bottom:-6px;
    opacity:0;
    transform-origin:center center;
    transition:all 250ms cubic-bezier(0.25,0.45,0.45,0.94) 0s;
    transform:scaleX(0);

      }
  
  }
  &:hover{
    span:after{
    opacity:1;
    transform:scaleX(1);
  }
 }}
 `
 const UserImg=styled.img`
 height:48px;
 width:48px;
 margin-right:20px;
 border-radius:50% ;
 `