import React from 'react';
import styled from "styled-components"
import CopyRight from './../assets/copyright.svg';
import Recycle from './../assets/recycle.svg';

const SideBar = () => {
    return (
        <Wrapper>
            
            <div style={{width:'200px', backgroundColor:"orange", height:"100px", paddingTop:"20px", borderRadius:"5%", marginTop:"30px"}}>
                <p>current Balance </p>
                <p>$16, 756. 00</p>
            </div>
            
            <DisplayDiv>
            
            <WrapText>
                <p style={{alignItems:'flex-end'}}><img width='20px' height='20px' src={Recycle} alt="logo"/></p>
                <p>Dash Board</p>
            </WrapText>
            <WrapText>
                <p style={{alignItems:'flex-end'}}><img width='20px' height='20px' src={Recycle} alt="logo"/></p>
                <p>Charts</p>
            </WrapText>
            <WrapText>
                <p style={{alignItems:'flex-end'}}><img width='20px' height='20px' src={Recycle} alt="logo"/></p>
                <p>Networth</p>
            </WrapText>
            <WrapText>
                <p style={{alignItems:'flex-end'}}><img width='20px' height='20px' src={Recycle} alt="logo"/></p>
                <p>Build Wealth</p>
            </WrapText>
            
            <WrapText>
                <p style={{alignItems:'flex-end'}}><img width='20px' height='20px' src={Recycle} alt="logo"/></p>
                <p>Chats & Message</p>
            </WrapText>
            <WrapText>
                <p style={{alignItems:'flex-end'}}><img width='20px' height='20px' src={Recycle} alt="logo"/></p>
                <p>User Profile</p>
            </WrapText>
            <WrapText>
                <p style={{alignItems:'flex-end'}}><img width='20px' height='20px' src={Recycle} alt="logo"/></p>
                <p>Project</p>
            </WrapText>
            </DisplayDiv>
            
            
            <div>
                <p>PDF Report</p>
                <p>Download monthly report</p>
            </div>
            <div>
                <button>
                    Download
                </button>
            </div>
            <div>
                Dark Mode
            </div>
            <div>
                <img src={CopyRight} alt="logo"/>
                2019 All Rights Reserved
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.div`
min-width: 200px;
height: 100vh;
`
const WrapText = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
width:150px;
padding-left: 10px;
padding-right: 10px;
`

const DisplayDiv= styled.div`
padding-top:30px;
`
export default SideBar
