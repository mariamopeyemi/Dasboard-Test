import React from 'react';
import styled from "styled-components";
import MiddleSection from "../components/MiddleSection"
import RightSection from '../components/RightSection';

const Main = () => {
    return (
        <Wrapper>
            <Navbar/>
            <SectionWrapper>

                <MiddleSection/>
                <RightSection/>
            </SectionWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
flex: 1;
background-color: #f5f3f3;
`

const Navbar = styled.nav`
height: 30px;
border: 1px solid #ccc;
margin:3px;
`
const SectionWrapper= styled.div`
display: flex;
background-color: #fff;

`
export default Main
