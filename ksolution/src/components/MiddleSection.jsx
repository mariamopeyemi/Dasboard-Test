import React from 'react';
import styled from "styled-components";
import { CardShadow } from './BaseComponents';
import MonthlyProfit from './MonthlyProfit';
import Investment from './Investment';

const MiddleSection = () => {
    return (
        <Container>
            <CardWrapper>
                <CardShadow>
                   <VisaCard> 
                            <div>
                                <p>
                                    VISA
                                </p>
                               
                            </div> 
                            <p> **** **** **** 4765
                                </p>
                          <div>
                          <DisplayCard className="tiny-grey">
                                <p>CARD HOLDER</p>
                                <p>VALID THRU</p>
                            </DisplayCard>
                            <DisplayCard>
                                <p>Stephen Austin</p>
                                <p>04/21</p>
                            </DisplayCard>
                          </div>
                       
                   </VisaCard>
                </CardShadow>
                <CardShadow style={{width:'300px'}}>
                    INVESTMENT VALUE
                </CardShadow>
                <CardShadow style={{width:'300px'}}>
                    LAST BID
                </CardShadow>
            </CardWrapper>
            <div className="flex">
                <Investment/>
                <MonthlyProfit/>
            </div>
            
        </Container>
    )
}
const Container = styled.div`
flex: 3;

.flex{
    display:flex;
}

`
const CardWrapper = styled.div`
display : flex;
height: 30vh;
`

const VisaCard = styled.div`
background-image: linear-gradient(to right, #fc08c7, #eb97ddc1);
height:100%;
width: 300px;
color:white;
padding:20px;
display: flex;
flex-direction: column;
justify-content: space-between;
.bottom{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
`
const DisplayCard = styled.div`
display:flex;
justify-content: space-between;
height:20px;
&.tiny-grey{
    color:#ccc;
    font-size:10px;
}

`
export default MiddleSection;
