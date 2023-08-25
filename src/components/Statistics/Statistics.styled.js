import styled from "styled-components";

export const StyledStatistic = styled.div`
    text-align: center;

span {
    display: inline-block;
    width: 90px;
    margin: 3px;
    border: 2px solid grey;
    padding: 5px;
}

span:first-of-type {
    background-color: lightgreen;
}
span:nth-of-type(2) {
    background-color: yellow;
}

span:last-of-type{
    background-color: red;
}

p {
    font-size: 16px;
    font-weight: bold;
}

`;