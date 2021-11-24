import React from 'react'
import styled from "styled-components";
import {ReactComponent as CreditIcon} from './../assets/credit-card.svg';
import { CardShadow} from './BaseComponents';


const arr = [1,2,3,4,5,6]
const MonthlyProfit = () => {
    return (
        <Container>
            <CardShadow>
                <Title><span>Monthly Profit</span><span>...</span></Title>
                <div>CHART IMAGE</div>
                <div>
                    <p><span>12 jul 2018</span><span>Amount</span></p>
                </div>

                {arr.map(()=>(
                    <div>
                    <MyList>
                            <div>
                                <CardIcon/>
                            </div>
                            <div>
                                <div display="flex" flexDirection="row">
                                    <DisplayCard>
                                            <p>Card **** **** **** 5678</p>
                                            <p style={{alignItems:'flex-end', color:'aqua'}}>-1,470</p>
                                    </DisplayCard>
                                    
                                </div>
                                <div display="flex" flexDirection="row">
                                        <DisplayCard className="tiny-grey">
                                            <p>5 march, 18:33</p>
                                            <p>USD</p>
                                        </DisplayCard>
                                </div>
                            </div>
                        </MyList>
                </div>
                ))}

            </CardShadow>  
        </Container>
    )
}
const Container = styled.div`
flex:1;
padding: 5px;
`
const MyList = styled.div`
border-bottom: 1px solid #ccc;
display:flex;
padding:10px;
/* width:300px; */
`
const DisplayCard = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
width:250px;
padding-left: 10px;
padding-right: 10px;
&.tiny-grey{
    color:#ccc;
    font-size:10px;
}

`
const Title = styled.div`
color: #444343;
display: flex;
justify-content: space-between;
padding: 0 10px 12px 20px;
font-size: 18px;
font-weight:bold;
`
const CardIcon = styled(CreditIcon)`
background-color: #5ac5f0;
color: white;
width:30px;
height: 30px;
padding: 9px;
border-radius: 50%;
`
export default MonthlyProfit
