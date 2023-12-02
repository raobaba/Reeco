import React from "react";
import styled from "styled-components";
import { FaBasketShopping, FaCertificate } from "react-icons/fa6";
import {
  GiBackPain,
  GiDelicatePerfume,
  GiCaterpillar,
  GiImbricatedArrows,
} from "react-icons/gi";
import { PiPaintBrushBold } from "react-icons/pi";
import { SiMedibangpaint } from "react-icons/si";

const SummaryContainer = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  align-items: center;
`;

const Box = styled.div`
  flex: 0 0 calc(16.66% - 10px);
  height: 100px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 300;
`;

const VerticalLine = styled.div`
  width: 0.5px;
  height: 80px;
  background-color: #ccc;
`;

const DivCategory = styled.div`
  width: 80%;
  margin: auto;
  height: 60%;
`;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;
const Second = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

function Summary() {
  return (
    <SummaryContainer>
      <Box>
        <p>Supliar</p>
        <br />
        <h4>
          East Coast Fruits <br /> & Vagetable
        </h4>{" "}
      </Box>
      <VerticalLine />
      <Box>
        <p>Shipping Date</p>
        <br />
        <h4>Thu, Feb 10</h4>
      </Box>
      <VerticalLine />
      <Box>
        <p>Total</p>
        <br />
        <h4>$ 15,028.3</h4>
      </Box>
      <VerticalLine />
      <Box>
        <p>Category</p>
        <br />
        <DivCategory>
          <First>
            <FaBasketShopping />
            <GiBackPain />
            <PiPaintBrushBold />
            <SiMedibangpaint />
          </First>
          <Second>
            <GiImbricatedArrows />
            <GiCaterpillar />
            <FaCertificate />
            <GiDelicatePerfume />
          </Second>
        </DivCategory>
      </Box>
      <VerticalLine />
      <Box>
        <p>Department</p>
        <br />
        <h4>300-444-279</h4>
      </Box>
      <VerticalLine />
      <Box>
        <p>Status</p>
        <br />
        <h4>
          Awaiting you <br /> Approval
        </h4>
      </Box>
    </SummaryContainer>
  );
}

export default Summary;
