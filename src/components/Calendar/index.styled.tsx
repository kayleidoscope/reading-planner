import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 150px);
  background-color: #fff;
  color: #444;
  margin: 20px;
`;

export const Cell = styled.div`
`;

interface DayCellProps {
  firstDayOffset?: number;
}

const rainbow = [
  "#FF2929",
  "#FF5714",
  "#FFB800",
  "#FDF222",
  "#6EEB83",
  "#1BE7FF",
  "#B863E2",
  "#CC5A99"
];

//TO DO: Fix borders on calendars -- ragged edges

export const DayCell = styled.div<DayCellProps>`
  &.first-day {
    grid-column-start: ${props => props.firstDayOffset};
  }
  border-top: 1px solid pink;
  border-right: 1px solid pink;
  height: 100px;
  font-size: 0.7rem;
`;

interface CellDateProps {
  day: number;
}

export const CellDate = styled.div<CellDateProps>`
  text-align: left;
  margin: 6px 12px;
  width: 10px;
  position: absolute;
  color: ${props => rainbow[props?.day]}
`;

export const CellSubheadAndData = styled.div`
  margin: 10px auto;
`;

interface ActualProps {
  metGoal?: boolean;
}

export const ActualData = styled.div<ActualProps>`
  color: ${props => props.metGoal ? "hotpink" : "gray"}
`;

interface EmojiProps {
  metGoal?: boolean;
}

//TODO: Emoji is simply refusing to show up
export const Emoji = styled.div<EmojiProps>`
  &:after {
    content: ${props => props.metGoal ? "\\1F937" : ""};
  }  
`;