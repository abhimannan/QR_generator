import React from 'react'
import styles from './Props.module.css';
import PropsType from 'prop-types';
const Props = (props) => {
 console.log(array);
  return (
    <div className={styles.student}>
     <table>
      <tr>
        <th>Name</th>
        <td>{props.name}</td>
      </tr>
      <tr>
        <th>Age</th>
        <td>{props.age}</td>
      </tr>
      <tr>
        <th>Maried/Not</th>
        <td>{props.ismaried ? "true" : "false"}</td>
      </tr>
      </table>
    </div>
  )
}

export default Props
// component.PropType
Props.PropsType={
 name:Props.string,
 age:Props.number,
 ismaried:Props.bool
};
Props.defaultProps={
     name:"Geetha",
     age:35,
     ismaried:true
};
