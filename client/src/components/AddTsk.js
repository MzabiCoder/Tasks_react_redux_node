import React, { useState } from 'react';
 import {addTask} from '../actions/taskAction'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
  
const AddTsk = ({addTask} ) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const toggle = () => {
    setModal(!modal)
}
   // const handleToggle = () => setModal(!modal);
   
 
    const change = e => {
        setName({ [e.target.name]: e.target.value })

}
  return (
    <div>
   
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={toggle}
        >
          Add Task 
        </Button>
  

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Tasks List</ModalHeader>
        <ModalBody>
        <Form onSubmit={e => {
                e.preventDefault()
                addTask(name)
                
                       
             toggle()          
          }} >
            <FormGroup>
              <Label for="item">Task</Label>
              <Input
                type="text"
                name="name"
                id="task"
                placeholder="Add to Tasks list"
             onChange={change}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
    tasks:state.task
});

export default connect(mapStateToProps,{addTask})(AddTsk);