import React from 'react';
import { Select } from 'antd';

import './SelectBox.scss';

const { Option, OptGroup } = Select;

const SelectBox = props => {
  // Events

  // const _onChange = value => {
  //   let eve = {
  //     target: {
  //       value: value,
  //       name: props.id
  //     }
  //   };
  //   props.onChange(eve);
  // };

  return (
    <div className='cmp-select-box'>
      {props.showLabel ? (
        props.label ? (
          <label htmlFor={props.id}>{props.label}</label>
        ) : null
      ) : null}
      <Select
        allowClear={props.allowClear}
        autoClearSearchValue={props.autoClearSearchValue}
        autoFocus={props.autoFocus}
        defaultActiveFirstOption={props.defaultActiveFirstOption}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        dropdownClassName={props.className}
        dropdownMatchSelectWidth={props.matchItemWidth}
        dropdownRender={props.dropdownRender}
        dropdownStyle={props.style}
        dropdownMenuStyle={props.menuStyle}
        firstActiveValue={props.firstActiveValue}
        getPopupContainer={props.getPopupContainer}
        labelInValue={props.labelInValue}
        maxTagCount={props.maxTagCount}
        maxTagTextLength={props.maxTagTextLength}
        maxTagPlaceholder={props.maxTagPlaceholder}
        mode={props.type}
        notFoundContent={props.notFoundContent}
        optionLabelProp={props.optionLabelProp}
        placeholder={props.placeholder}
        showArrow={props.showArrow}
        showSearch={props.searchable}
        size={props.size}
        suffixIcon={props.suffixIcon}
        removeIcon={props.removeIcon}
        clearIcon={props.clearIcon}
        menuItemSelectedIcon={props.menuItemSelectedIcon}
        tokenSeparators={props.tokenSeparators}
        search={props.search}
        selection={props.selection}
        name={props.name}
        id={props.id}
        className={props.crossHidden ? `select {props.className} cross-hidden` : 'select ' + props.className}
        value={props.value}
        // onChange={_onChange}
        onDeselect={props.onDeselect}
        onSearch={props.onSearch}
        onSelect={props.onSelect}
        defaultOpen={props.defaultOpen}
        loading={props.loading}
        optionFilterProp={props.optionFilterProp}
        filterOption={(input, option) => {
          return (
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          );
        }}>
        {props.grouped
          ? props.options.map(({ label, data }, key) => (
              <OptGroup key={key} label={label}>
                {data.map(({ value, text }, key) => (
                  <Option key={key} value={value}>
                    {text}
                  </Option>
                ))}
              </OptGroup>
            ))
          : props.options.map(({ value, text }, key) => (
              <Option key={key} value={value}>
                {text}
              </Option>
            ))}
      </Select>
      {props.error ? (
        <div className='invalid-message'>{props.errorComputedMessage}</div>
      ) : null}
      {props.helpText !== null ? (
        <small id={`${props.id}HelpBlock`} className='form-text text-muted'>
          {props.helpText}
        </small>
      ) : null}
    </div>
  );
};

SelectBox.defaultProps = {
  showLabel: true,
  placeholder: '',
  search: false,
  errorComputedMessage: '',
  helpText: null,
  error: false,
  allowClear: true,
  grouped: false
};

export { SelectBox };
