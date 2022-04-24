import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import styled from 'styled-components';

const Temp = styled.div`
margin-top: 100px;
text-align: center;
margin-bottom: 100px;
margin-left: 100px;
margin-right: 100px;
@media screen and (max-width: 991px) {
    font-size: 10px;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

function Howwework() {
  return (
    <>
      {/* yeh neeche waala part use kar lena proper designing ke liye */}
      {   /*   <InfoSection {...homeObjOne} />
  <InfoSection {...homeObjTwo} /> */}
  <Temp>
  <h1>
    We will update this section soon.
  </h1>
  <br />
  <h1>
    But don't worry we don't have hard and fast rules for day to day task assigned to our interns and employees.
  </h1>
</Temp>
    </>
  );
}

export default Howwework;
