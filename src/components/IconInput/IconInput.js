import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconLayout = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 24px;
`;

const InputLayout = styled.label`
  display: block;
  color: ${COLORS.gray700};
  position: relative;
  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  --size: ${(props) => (props.size === "small" ? 24 : 36) / 16}rem;
  border: none;
  border-bottom: ${(props) => (props.size === "small" ? 1 : 2)}px solid
    ${COLORS.black};
  color: inherit;
  height: var(--size);
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => (props.size === "small" ? 14 : 18) / 16}rem;
  padding-left: var(--size);
  outline-offset: 2px;
  width: ${(props) => props.width}px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInput = ({ label, icon = "search", width = 250, size, ...props }) => {
  const small = size === "small";
  return (
    <InputLayout size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconLayout>
        <Icon id={icon} size={small ? 16 : 24} strokeWidth={small ? 1 : 2} />
      </IconLayout>
      <NativeInput {...props} size={size} width={width} />
    </InputLayout>
  );
};

export default IconInput;
