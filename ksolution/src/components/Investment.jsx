import React from 'react';
import styled from "styled-components";
import { CardShadow } from './BaseComponents';

const tableData = [
       {sn:1,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"red"
},
    {sn:2,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"red"
},
    {sn:3,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"red"
},
    {sn:4,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"orange"
},
    {sn:5,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"green"
}, {sn:6,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"red"
},
    {sn:7,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"orange"
},
    {sn:8,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"green"
}, {sn:9,
    name: "Honey Wells",
        amount: 499,
        date: "03-08-2018",
        color:"red"
},
]
const Investment = () => {
    
    return (
        <CardShadow style={{flex: 2}}>
        <Container>
            
                
            <Title><span>investments</span><span>...</span></Title>

            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>date</th>
                </tr>
                </thead>
                <tbody>
                    {tableData.map(({sn,name,amount,date,color})=>{
                        return(
                            <Tr key={sn}>
                            <td> <input type="checkbox" id={sn} /> {" "} {sn}</td>
                            <td>{name}</td>
                            <td>{amount}</td>
                            <td>{date}</td>
                            <td><Dot bg={color}/></td>
                        </Tr>
                        )
                    })}
                </tbody>
            </Table>          
        </Container>
        </CardShadow>  
    )
}

const Container = styled.div`

/* height: 40vh; */
padding: 5px;
`
const Title = styled.div`
color: #444343;
display: flex;
justify-content: space-between;
padding: 0 10px 12px 20px;
font-size: 18px;
font-weight:bold;
`
const Table=styled.table`
width: 100%;
border-collapse: collapse; 
`

const Dot= styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background-color: ${(props)=>props.bg};
`

const Tr = styled.tr`
height: 40px;
border-bottom: 1px solid #ccc;
font-size:12px;

`
export default Investment
