import React from 'react'

function NavItem (props) {
  return(
    <li className={props.isFirstOne == true ? "active": ""}><a>{props.name}</a></li>
  )
}

export default NavItem;




/*var NavItem = React.createClass({
  render: function(){
    return(
      <li className={this.props.isFirstOne == true ? "active": ""}><a>{this.props.name}</a></li>
    );
  }
});*/