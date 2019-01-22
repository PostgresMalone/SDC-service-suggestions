// import React from 'react';
// import { AddList, ListNameInput, CancelButton, CreateButton } from './Styled_Components/modalStyling.jsx';

// class ModalAddList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listName: ''
//     };
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleNameChange(e) {
//     this.setState({[e.target.id]: e.target.value});
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.addFavoriteList(this.state.listName);
//     this.setState({listName: ''});
//   }

//   render() {
//     return (
//       <div>
//         <AddList>Name</AddList>
//         <ListNameInput 
//           type="text" 
//           id="listName" 
//           value={this.state.listName}
//           placeholder="Name your list" 
//           onChange={this.handleNameChange}
//         />
//         <CancelButton onClick={this.props.toggleListForm}>Cancel</CancelButton>
//         <CreateButton onClick={this.handleSubmit}>Create</CreateButton>
//       </div>
//     );
//   }
// }

// export default ModalAddList;