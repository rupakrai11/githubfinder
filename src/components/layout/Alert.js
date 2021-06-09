import React, { useContext } from "react";
import AlertContext from "./../../contaxt/alert/alertContext";
/**
 * @author
 * @function Alert
 **/

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle" />
        &nbsp;{alert.msg}
      </div>
    )
  );
};

export default Alert;
