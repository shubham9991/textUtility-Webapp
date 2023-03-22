import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }//S capital krne k lie

  return (
        props.Alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capitalize.props.alert.type}</strong> {props.alert.msg}
        </div>
  )
} //agr props.alert null hai to aage ka return nhi hoga if props.alert is not null do aage vale

export default Alert
