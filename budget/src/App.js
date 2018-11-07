import React, { Component } from 'react';
import styled from 'styled-components';
import Table from 'react-table';
import { Box, Flex } from 'grid-styled';

const Wrapper = styled.div`
  color: ${ ({ styleIsGood }) => styleIsGood ? 'cornSilk' : 'darkSalmon' };
  background-color: ${ ({ isGood }) => isGood ? 'darkSalmon' : 'darkSlateGray' };
  cursor: pointer;
`;

const StyledTable = styled(Table)`
  color: pink;
  width: 500px;
  height: 500px;
`
const StyledBox = styled(Box).attrs({
  width: [1, 1, .5, .5],
  className: 'whatever'
})`
  background-color: pink;
  height: 500px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGood: true,
    }
  }

  handleIsGood = () => this.setState({ isGood: !this.state.isGood })
  
  render() {
    const {
      handleIsGood,
      state: {isGood},
    } = this;
    return (
      <Wrapper styleIsGood={isGood}>
        <h1 onClick={handleIsGood}>Hello</h1>
        <StyledBox></StyledBox>
      </Wrapper>
    );
  }
}

export default App;
