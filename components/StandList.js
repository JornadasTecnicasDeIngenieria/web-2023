import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { AlignedDiv } from "./StyledComponents";

export const StandList = ({ content }) => {
  return (
    <TableContainer>
      <AlignedDiv>
      <ScrollableTable>
        <tr>
          <th></th>
          <TH>Martes 14</TH>
          <TH>Miércoles 15</TH>
        </tr>
        {content.map(d => (
          <tr key={d.stand+d.d1+d.d2}>
            <TD key={d.stand}>{d.stand}</TD>
            <TDH key={d.d1}>{d.d1}</TDH>
            <TDH key={d.d2}>{d.d2}</TDH>
          </tr>
        )
        )}
      </ScrollableTable>
      </AlignedDiv>
    </TableContainer>
  )
}

const TH = styled.th`
padding: 1rem;
text-align: center;
min-width: 10%;
background-color: #7454ae;
color: white;
border: 5px solid #3c3c54;
font-size: 1.3rem;
`;

const TD = styled.td`
padding: 1rem;
text-align: center;
min-width: 10%;
border: 5px solid #3c3c54;
background: #7454ae;
color: white;
font-weight: bold;
font-size: 1.3rem;
`;

const TDH = styled.td`
padding: 1rem 4rem;
text-align: center;
min-width: 10%;
border: 5px solid #3c3c54;
background-color: #FFEB83;
font-weight: bold;
font-size: 1.3rem;
color: #3c3c54
`;

const ScrollableTable = styled.table`
border-collapse: collapse;
`;

const TableContainer = styled.div`
overflow-x: auto;
`;