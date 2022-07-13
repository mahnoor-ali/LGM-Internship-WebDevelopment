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

  const handleDelete = (event) => {
    // delete the item from local storage
    // localStorage.removeItem(document.getElementById('task').innerHTML);

    let parentId = event.target.parentNode.id; //get parent Id of clicked item
    parentId = document.getElementById(parentId);

    while(parentId.firstElementChild){ //delete children of parent
      parentId.removeChild(parentId.lastElementChild);
    }

     parentId.remove(); //remove parent
  }

  return (
      <div id={props.count} className="listItem">
        <span onClick={handleCheck} className="align-middle"><i id="check" className="bi bi-circle"></i></span>
        <span> {props.listItem}  </span>
        <i onClick={handleDelete}  id="delete" className="bi bi-trash3-fill "></i>
      </div>
  )
}
