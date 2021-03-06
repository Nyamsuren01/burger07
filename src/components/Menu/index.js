import React, {Fragment} from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import MenuItem from "../MenuItem";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
    {props.userId ? (
      <Fragment>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГУУД </MenuItem>
      <MenuItem link="/logout">ГАРАХ</MenuItem> </Fragment> 
      ): (
      <Fragment>
        <MenuItem link="/login">НЭВТРЭХ</MenuItem>
       <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
      </Fragment>
       
      )}
      
      
    </ul>
  </div>   
);

const mapStateToProps = state => {
  return {
      userId: state.signupLoginReducer.userId
  };
};


export default connect(mapStateToProps)(Menu);
