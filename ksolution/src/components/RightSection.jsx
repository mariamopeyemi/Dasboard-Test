import React from 'react';

import styled from "styled-components";
import { CardShadow} from './BaseComponents';
import Check from './../assets/check-circle.svg';
import Paypal from './../assets/paypal-brands.svg';
import Recycle from './../assets/recycle.svg';
import Return from './../assets/return.svg';
import Star from './../assets/star-solid.svg';
import Mimi from './../assets/mariam.svg';
import Alaf from './../assets/abdullah.svg';



const RightSection = () => {
    return (
        <Container>
            <CardShadow>
                <Title><span>Payment History</span><span>...</span></Title>
                <MyList>
                    <div>
                        <img width='20px' height='20px' src={Recycle} alt="logo"/>
                    </div>
                    <div>
                        <div display="flex" flexDirection="row">
                            <DisplayCard>
                                    <p>Deposit from ATL</p>
                                    <p style={{alignItems:'flex-end'}}>-1,470</p>
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
                {/*  */}
                <MyList>
                    <div>
                        <img width='20px' height='20px' src={Paypal} alt="logo"/>
                    </div>
                    <div>
                        <div display="flex" flexDirection="row">
                            <DisplayCard>
                                    <p>Deposit from Paypal</p>
                                    <p style={{alignItems:'flex-end'}}>-1,470</p>
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
                 {/*  */}
                <MyList>
                    <div>
                        <img  width='20px' height='20px' src={Check} alt="logo"/>
                    </div>
                    <div>
                        <div display="flex" flexDirection="row">
                            <DisplayCard>
                                    <p>Cancelled</p>
                                    <p style={{alignItems:'flex-end'}}>-1,470</p>
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
                {/*  */}
                <MyList>
                    <div>
                        <img  width='20px' height='20px' src={Return}  alt="logo"/>
                    </div>
                    <div>
                        <div display="flex" flexDirection="row">
                            <DisplayCard>
                                    <p> Refund</p>
                                    <p style={{alignItems:'flex-end'}}>-1,470</p>
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
                {/*  */}
                <MyList>
                    <div>
                        <img  width='20px' height='20px' src={Recycle}  alt="logo"/>
                    </div>
                    <div>
                        <div display="flex" flexDirection="row">
                            <DisplayCard>
                                    <p> Deposit from ATL</p>
                                    <p style={{alignItems:'flex-end'}}>-1,470</p>
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
            </CardShadow>
            <CardShadow>
            <Title>Recent reviews</Title>
            <div>
                <button>4.3</button>
                <img width='20px' height='20px' src={Star} alt="logo"/>
                <img width='20px' height='20px' src={Star} alt="logo"/>
                <img width='20px' height='20px' src={Star} alt="logo"/>
                <img width='20px' height='20px' src={Star} alt="logo"/>
                <img width='20px' height='20px' src={Star} alt="logo"/>
                <span>360 reviews</span>
                <hr/>
                <Display >
                 <img src={Mimi} alt="logo"/>
                 <div>
                     <p>Belle Brown</p>
                     <img width='20px' height='20px' src={Star} alt="logo"/>
                     <img width='20px' height='20px' src={Star} alt="logo"/>
                     <img width='20px' height='20px' src={Star} alt="logo"/>
                     <p>Now, if you are interested in being the best player</p>
                 </div>
                </Display >
                <Display >
                 <img src={Alaf} alt="logo"/>
                 <div>
                     <p>Travis</p>
                     <img width='20px' height='20px' src={Star} alt="logo"/>
                     <img width='20px' height='20px' src={Star} alt="logo"/>
                     <img width='20px' height='20px' src={Star} alt="logo"/>
                     <p>Now, if you are interested in being the best player</p>
                 </div>
                </Display >
            </div>
            </CardShadow>
        </Container>
    )
}

const Container = styled.div`
flex: 1;

`
const MyList = styled.div`
border-bottom: 1px solid #ccc;
display:flex;
padding:5px;
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
const Display = styled.div`
display:flex;
flex-direction: row;
`
export default RightSection

