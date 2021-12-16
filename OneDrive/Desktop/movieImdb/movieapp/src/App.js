import React, { useState,useEffect } from "react";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponents";

import "./App.css";
import arr from "./components/Image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.span`
  font-size: 20px;
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 6px;
`;
// const SearchBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 10px 10px;
//   background-color: white;
//   border-radius: 6px;
//   margin-left: 20px;
//   height: 20px;
//   width: 50%;
//   background-color: white;
//   justify-content: center;
// `;
// const SearchIcon = styled.img
// `
// width:32px;
// height:32px;
// `
// const SearchInput = styled.input`
//   color: black;
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   oultline: none;
//   margin-left: 15px;
//   padding: 10px;
// `;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap:1px;
  justify-content: space-evenly;
`;
function App() {
  const [takeApi, setApi] = useState([]);
  // useEffect(()=>{
  //   fetch("https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c7e096eae87840b8a56d4a0107b359db-data.json").then((data)=>{
  //           data.json().then((item)=>{
  //             console.log(item);
  //           })
  //   })
  // },[])

  // unable to fetch data from api so storing data on array in separate folder.

  return (
    <Container>
      <Header>
        <AppName>
          <LogoContainer>
            <Logo>LBL</Logo>
          </LogoContainer>
          Latest Blockbusters
        </AppName>
        {/* <SearchBox>
          <SearchInput />
        </SearchBox> */}
      </Header>
      <MovieListContainer>
        {arr.map((data) => (
          <MovieComponent
            image={data.Poster}
            movName={data.Title}
            boxoffice={data.BoxOffice}
            imdrate={data.imdbRating}
            individual={data}
          />
        ))}
      </MovieListContainer>
    </Container>
  );
}

export default App;
