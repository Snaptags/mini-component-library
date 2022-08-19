/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const WIDTH = 370;

const getHeight = (size) =>
  size === "medium" ? 12 : size === "small" ? 8 : 24;

// round inner bar "as-needed": the right edge will be rounded as it approaches 100%:
const radius = (value) => (value <= 98 ? 0 : `${4 - (100 - value) * 2}px`);

const Bar = styled.div`
  width: ${WIDTH}px;
  height: ${(props) => getHeight(props.size)}px;

  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: ${(props) => (props.size === "large" ? 8 : 4)}px;
  display: inline-block;
`;

const Progress = styled.div`
  height: ${(props) => getHeight(props.size)}px;

  ${(props) =>
    props.size === "large" &&
    css`
      height: 16px;
      margin: 4px;
    `}
  margin-right: ${(props) =>
    Math.max(
      WIDTH - (WIDTH / 100) * props.value,
      props.size === "large" ? 4 : 0
    )}px;
  background: ${COLORS.primary};
  border-radius: 4px
    ${(props) => `${radius(props.value)} ${radius(props.value)}`} 4px;
`;

const ProgressBar = ({ value, size }) => (
  <Bar size={size} role="progressbar" aria-valuenow={value}>
    <Progress size={size} value={value} />
  </Bar>
);

export default ProgressBar;
