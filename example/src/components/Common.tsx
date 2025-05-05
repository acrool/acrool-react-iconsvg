import styled from 'styled-components';
import {Container} from "@acrool/react-grid";

export const Name = styled.div`
    color: #e83e8c;
`;


export const CollapseButton = styled.button`
    width: 20px;
    height: 20px;
    background-color: #535bf2;
    border-radius: 4px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    outline: none;
    box-shadow: none;
    border: none;
    color: #fff;

    &[data-active] {
        background-color: #f25353;
    }
`;


export const Avatar = styled.img`
    border-radius: 99em;
    overflow: hidden;
    width: 35px;
    height: 35px;
`;

export const TableContainer = styled(Container)`
    --primary-color: #17a254;

    //.status-danger{
    //    border-left-color: #e83e8c !important;
    //}

    table {
        //--vertical-border-color: var(--border-color);
        //--header-border-color: var(--border-color);
        //--tbody-th-bg-color: #4a63b6;
        //--tbody-th-color-color: #0a278a;
        //--border-color: rgba(66, 66, 66, 0.27);

        //--border-radius: 50px;
    }
`;

export const Button = styled.button`
    color: #fff;
    background-color: #e83e8c;
    border-radius: 4px;
`;

export const Title = styled.h1`
    color: #2b70b4;
    text-align: center;
    margin: 20px;
`;

