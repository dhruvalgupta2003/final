import React from 'react'
import {GoCalendar} from "react-icons/go"
import styled from 'styled-components'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { formatDate } from './util/Tools1';
import {GiEarthAmerica} from 'react-icons/gi'
const Wrapper = styled.div`
padding:20px 0px;
`
const HeadingDeadline = styled.div`
padding:20px 40px;

`
const Deadline = styled.p`
display:flex;
align-items:center;
font-weight:500;
font-size:20px;

padding:5px 20px;
`
const Title = styled.p`

width: 726.78px;
height: 71.82px;
width:100%;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 38.7805px;
line-height: 130%;
padding:40px 0px;
color: #000000;

`
const DeadlineDate = styled.div`
padding:0px 20px;
display:flex;
align-items:center;
background: #FAD669;
height:40px;

border-radius:20px;
`
const Container = styled.div`
display:flex;
justify-content:space-between;
// margin:20px 0px;

`
const Box = styled.div`
height:250px;
width:496px;
background: #FAD669;
margin:40px 0px;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
border-radius: 30px 0px 0px 30px;
display:flex;
flex-direction:column;
justify-content:space-between;

`
const AboutScholorship = styled.div`
height:100%;
border: 2px solid #EEB711;
border-radius: 23px;
margin:20px 40px;
width:90%;

`
const Tobe = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
padding:0px 20px;
line-height: 45px;
`
const Eligibilities = styled.ul`
padding:10px 20px;
line-height:150%;
font-size:20px;
font-weight:500;
font-family:sans-serif;
// font-style:normal;
`
const Eligibility = styled.li`
padding:5px 20px;

`
const Row1= styled.div`
display:flex;
justify-content:space-between
// margin:20px 20px;
`
const RegionContainer =styled.div`
display:flex;
align-items:center;

`
const Region = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 15px;

/* identical to box height */


color: #FFFFFF;
`

const RegionName = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
display:flex;
flex-direction:column;
flex-wrap:wrap;

/* identical to box height */


color: #000000;
`
const Outer = styled.div`
display:flex;
flex-direction:column;

`
const Button= styled.button`

width: 140px;
height: 42px;
color:white;
border:none;
display:flex;
margin-left:auto;
align-items:center;
justify-content:center;
margin-right:auto;
/* Yellow Gradient */
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 15px;
cursor:pointer;
background: linear-gradient(276.31deg, #EFB506 -25.96%, rgba(255, 193, 7, 0.15) 180.24%);
border-radius: 15px;
`

const Row2 = styled.div`
display:flex;
// flex-direction:column
justify-content:space-between;

`

const Scholorship = ({images}) => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [products,setProducts] = useState({});

    useEffect(()=>{
        const getProducts = async()=>{
          try{
            const res = await axios.get( `http://localhost:5000/api/products/find/`+id)
            
            setProducts(res.data);
            console.log(res);
            
          }catch(err){
            console.log(err);
          }
        }
        getProducts();
      },[id]);
  
    return (
      <Wrapper>
        <Container>
        <HeadingDeadline>
            <Title>{products.title}</Title>
            <Deadline><GoCalendar style={{fontSize:"35px",padding:"10px"}} />Deadline:- <DeadlineDate> {formatDate(products.deadline)}</DeadlineDate></Deadline>
        </HeadingDeadline>
        <Box>
          <Row1>
            <RegionContainer>
        <GiEarthAmerica style={{margin:"20px 20px",fontSize:"40px"}}/>
        <Outer>
        <RegionName >Region</RegionName>
        <Region>{products.origin}</Region>
        </Outer>
        </RegionContainer>
        <RegionContainer >
        <GiEarthAmerica  style={{margin:"20px 20px",fontSize:"40px"}}/>
        <Outer>
        <RegionName >State</RegionName>
        <Region style={{minWidth:"130px",display:"flex",flexWrap:"wrap"}}>{products.state}</Region>
        </Outer>
        </RegionContainer>
        </Row1>
        <Row2>
            <RegionContainer>
        <GiEarthAmerica style={{margin:"20px 20px",fontSize:"40px"}}/>
        <Outer>
        <RegionName>Profession</RegionName>
        <Region>{products.profession}</Region>
        </Outer>
        </RegionContainer>
        <RegionContainer>
        <GiEarthAmerica  style={{margin:"20px 20px",fontSize:"40px"}}/>
        <Outer>
        <RegionName style={{minWidth:"130px"}}>Income</RegionName>
        <Region>₹ {products.income}</Region>
        </Outer>
        </RegionContainer>
        </Row2>
        </Box>
        </Container>
        




        {/* profession:{
            type: String
        }
        ,
        gender:{
            type: String
        },
        income:{
            type: String 
        },
        category:{
            type:String
        } */}




















        <AboutScholorship>
        <Deadline>Award: <Eligibilities style={{textDecoration:"none",color:"#FAD669"}}>₹{products.award}</Eligibilities></Deadline>
            <Deadline>Eligibility</Deadline>
            <Tobe>To be eligible, an applicant must -</Tobe>
            {/* <Eligibilities> */}
                <Eligibility style={{fontFamily:"cursive"}}>{products.elegibility}</Eligibility>
                <Eligibility style={{fontFamily:"cursive"}}>{products.elegibility2}</Eligibility>
                <Eligibility style={{fontFamily:"cursive"}}>{products.elegibility}3</Eligibility>
            {/* </Eligibilities> */}
            <Deadline style={{padding:"20px 20px"}}>Description:</Deadline>
            <Eligibilities>{products.description}</Eligibilities>
        </AboutScholorship>
        <Button><a href={products.website} target={"_blank"} style={{textDecoration:"none",color:"white"}}>Apply</a></Button>
      </Wrapper>
    )
  }
  
  export default Scholorship