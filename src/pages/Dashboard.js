import React from 'react';
import Main from "../layout/Main"
import SideBar from "../layout/SideBar"
import styled from "styled-components"
const Dashboard = () => {
    return (
        <Container>

            <SideBar/>
            <Main/>
            
        </Container>
    )
}

const Container = styled.div`
display: flex;
`

// const Card = styled.div`
// /* background-color: rebeccapurple; */
// border-radius: 10px;
// height: 200px;
// width:280;
// color:white
// `
export default Dashboard
