import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const SelectLayout = styled.div`
  position: relative;
  font-family: "Roboto", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${COLORS.gray700};

  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  padding: 12px 16px 12px 16px;
  &:hover {
    color: ${COLORS.black};
  }
  ${(props) =>
    props.focussed &&
    css`
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    `}
`;

const Down = styled(Icon)`
  display: inline;
  padding-left: 16px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const [focussed, setFocussed] = React.useState(false);

  return (
    <SelectLayout focussed={focussed}>
      <NativeSelect
        value={value}
        onChange={onChange}
        onBlur={() => setFocussed(false)}
        onFocus={() => setFocussed(true)}
      >
        {children}
      </NativeSelect>
      {displayedValue}
      <Down id="chevron-down" strokeWidth={2} />
    </SelectLayout>
  );
};

export default Select;
