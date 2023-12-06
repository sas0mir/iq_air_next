"use client"
import styles from '../globals.module.css'
import { useState, useEffect, useRef } from 'react';
import { ISelectProps } from './constants';

const Icon = (isOpen: any) => {
  return (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? styles.select_translate : ''}>
          <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
  );
};

// CloseIcon component
const CloseIcon = () => {
  return (
      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
  );
};


export default function Select(props: ISelectProps) {

  const { placeHolder, options, isMulti, isSearchable, onChange, optionName } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<any>(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<any>();
  const inputRef = useRef<any>();

  // useEffect(() => {
  //   setSearchValue("");
  //   if (showMenu && searchRef.current) {
  //       searchRef.current.focus();
  //   }
  // }, [showMenu]);

  useEffect(() => {
      //window.addEventListener("click", () => setShowMenu(false));
      return () => {
          //window.removeEventListener("click", () => setShowMenu(false));
      };
  });

  const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
      if (!selectedValue || selectedValue.length === 0) {
          return placeHolder;
      }
      if (isMulti) {
          return (
              <div className={styles.select_dropdown_tags}>
                  {
                      selectedValue.map((option: any, index: number) => (
                          <div key={index} className={styles.select_dropdown_tag_item}>
                              {option[optionName]}
                              <span onClick={(e: React.MouseEvent<HTMLElement>) => onTagRemove(e, option)} className={styles.select_dropdown_tag_close} >
                                  <CloseIcon />
                              </span>
                          </div>
                      ))
                  }
              </div>
          );
      }
      return selectedValue.label;
  };

  const removeOption = (option: any) => {
      return selectedValue.filter((o: any) => o[optionName] !== option[optionName]);
  };

  const onTagRemove = (e: React.MouseEvent<HTMLElement>, option: any) => {
      e.stopPropagation();
      const newValue = removeOption(option);
      setSelectedValue(newValue);
      onChange(newValue);
  };

  const onItemClick = (option: any) => {
    let newValue;
    if (isMulti) {
        if (selectedValue.findIndex((o: any) => o[optionName] === option[optionName]) >= 0) {
            newValue = removeOption(option);
        } else {
            newValue = [...selectedValue, option];
        }
    } else {
        newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option: any) => {
      if (isMulti) {
          return selectedValue.filter((o: any) => o[optionName] === option[optionName]).length > 0;
      }

      if (!selectedValue) {
          return false;
      }

      return selectedValue[optionName] === option[optionName];
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
        return options;
    }

    return options.filter(
        (option) =>
            option[optionName].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div className={styles.select_custom__dropdown_container}>

            <div ref={inputRef} onClick={handleInputClick} className={styles.select_dropdown_input}>
                <div className={!selectedValue || selectedValue.length === 0 ? styles.select_dropdown_selected_value_placeholder : styles.select_dropdown_selected_value}>{getDisplay()}</div>
                <div className={styles.select_dropdown_tools}>
                    <div className={styles.select_dropdown_tool}>
                        <Icon isOpen={showMenu} />
                    </div>
                </div>
            </div>

            {
                showMenu && (
                    <div className={styles.select_dropdown_menu_alignment__left}>
                        {
                            isSearchable && (
                                <div className={styles.select_search_box}>
                                    <input className={styles.select_form_control} onChange={onSearch} value={searchValue} ref={searchRef} />
                                </div>
                            )
                        }
                        {
                            getOptions().map((option, index) => (
                                <div onClick={() => onItemClick(option)} key={index} className={isSelected(option) ? styles.select_dropdown_item_selected : styles.select_dropdown_item} >
                                    {option[optionName]}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
  )
}