import React from 'react';

//import { Icon } from "../components/Icon.js";

export const Header = () => {
  return (
      <header className={"header"}>
          <TopBar />
          <Menu /> 
      </header>
  );
};

const TopBar = () => {
  return (
      <div className={"topBar"}>
          <label>icon</label>
          <label>CASSIOPEIA</label>
          <div className={"divLabel3And4"}>
            <label>icon2</label>
            <label>icon3</label>
          </div>
      </div>
  );
};

const Menu = () => {
  return (
      <div className={"menu"}>
        <label className={"label-menu"}>Item1</label>
        <label className={"label-menu"}>Item2</label>
        <label className={"label-menu"}>Item3</label>
        <label className={"label-menu"}>Item4</label>
        <label className={"label-menu"}>Item5</label>
      </div>
  );
};
