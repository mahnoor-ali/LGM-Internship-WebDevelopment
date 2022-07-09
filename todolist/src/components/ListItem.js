import React from 'react'

export default function ListItem(props) {

  const [isCheck, setIsCheck] = React.useState(false);

  const handleCheck = () => {
    // mark as checked is its not already checked and vice versa
    if(isCheck){
      document.getElementById('check').setAttribute("class", "bi bi-circle" );
      setIsCheck(false);
    }
    else{
      document.getElementById('check').setAttribute("class", "bi bi-check-circle" );
      setIsCheck(true);
    }
  }

  const handleDelete = () => {
    // delete the item from local storage
    // localStorage.removeItem(document.getElementById('task').innerHTML);
  }

  return (
    <div id="list">
      <div className="listItem">
        <span onClick={handleCheck} className="align-middle"><i id="check" className="bi bi-circle"></i></span>
        <span> my task 1  </span>
        <i onClick={handleDelete}  id="delete" className="bi bi-trash3-fill "></i>
      </div>
    </div>
  )
}
