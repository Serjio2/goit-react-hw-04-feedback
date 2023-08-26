import styled from "styled-components";

export const StyledStatistic = styled.div`
    text-align: center;

span {
    display: inline-block;
    width: 100px;
    margin: 5px;
    border: 2px solid grey;
    padding: 10px 0;
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