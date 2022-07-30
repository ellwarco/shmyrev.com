import styled, { css } from 'react-emotion';
import { media, colors } from './constants';

export const ContentWrapper = styled.div`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 5rem auto 5rem;
  ${media.lg`
    margin: 4rem auto 3rem;
    width: calc(100% - 7rem * 2);
  `}
  
  ${media.md`
    width: 100%;
    margin: 3rem auto 0;
    padding: 0 3rem 6rem;
  `}
  
  ${media.sm`
    margin: 2rem auto 0;
    padding: 0 2rem 6rem;
  `}
`;


export const ListItem = styled.li`
    margin: 0;
    font-size: 0.9rem;
    color: ${colors.gray500};
    padding: .3rem 0;
    line-height: 1.8em;
`;

export const GridBase = css`
    width: 100%;
    @supports(display: grid) {
        @media(min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
        }
    }
`;

export const ContentLimit = css`
  max-width: 90%;
  margin: 5rem auto 0;
  ${media.lg`
  max-width: 100%;
  `}
  ${media.sm`
  margin: 3rem auto 0;
  `}
`;
export const TimelineItem = styled.li`
    font-size: 14px;
    list-style: none;
    margin: 0;
    position: relative;
    padding: 0 0 20px
`;

export const TimelineItemContent = styled.div`
    padding: 0 0 0 18px;
    position: relative;
    top: -6px;
      > p {
        font-size: 18px;

      }
`;

export const TimelineItemHead = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 100px;
    border: 2px solid transparent
`;

export const TimelineItemHeadBlue = css`
    border-color: #1890ff;
    color: #1890ff
`;

export const TimelineItemHeadCustom = css`
    position: absolute;
    text-align: center;
    line-height: 1;
    margin-top: 0;
    border: 0;
    height: auto;
    border-radius: 0;
    padding: 3px 1px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 5px;
    left: 5px;
    width: auto
`;

export const TimelineItemHeadGreen = css`
    border-color: #52c41a;
    color: #52c41a
`;

export const TimelineItemHeadRed = css`
    border-color: #f5222d;
    color: #f5222d
`;

export const TimelineItemTail = styled.div`
    position: absolute;
    left: 4px;
    top: .75em;
    height: 100%;
    border-left: 2px solid #e8e8e8
`;

export const TimelineItemLast = css`

        & .${TimelineItemTail} {
            border-left: 2px dotted #e8e8e8;
            display: none
        }

        & .${TimelineItemContent} {
            min-height: 48px
        }

    `;

export const TimelineItemPending = css`

        & .${TimelineItemHead} {
        font-size: 16px
        }

        & .${TimelineItemTail} {
        display: none
        }

    `;

export const Timeline = styled.ul`
    line-height: 1.5;
    color: rgba(255, 255, 255, .65);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0
    list-style: none;
    margin: 0

        &.ant-timeline-pending .${TimelineItemLast} .${TimelineItemTail} {
        display: block
        }
    `;