import styled from 'styled-components';
import { Colors, Fonts } from './themes';

export const Tag = styled.div`
    background: ${Colors.primaryShade6};
    border-radius: 30px;
    color: ${Colors.primaryShade2};
    padding: 6px 8px;
    letter-spacing: 1px;
    margin: 0 8px 0 0;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${Fonts.t600};
`;

export const OverflowWrapper = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
