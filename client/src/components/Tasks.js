import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

const Tasks = () => {
    const [tasks, setItems] = useState([{
       id:uuid(),
        name: 'eggs'
    },
    {
        id:uuid(),
         name: 'milk'
        },
        {
            id:uuid(),
             name: 'bread'
        },
        {
            id:uuid(),
             name: 'soda'
         }])
    return (
        <Container>
            <Button
                color="dark"
                style={{ marginBottom: '1rem' }}
                onClick={() => {
                    const name = prompt('Enter Task')
                    if (name) {
                        setItems([...tasks,{name,id:uuid()}]) 
                    }
                }}
            >Add Task</Button> 
            <ListGroup>
                <TransitionGroup className="tasks">
                    {tasks.map(({ id, name }) => (
                    <CSSTransition key={id} timeout={500} classNames="fade" >
                            <ListGroupItem>
                                <Button
                                   color="danger"
                                    style={{marginRight:'1rem'}}
                                    size="sm"
                                    onClick={() => {
                                      tasks.filter(task=>task.id!==id)  
                                    }}
                                >X</Button>
                                {name}
                            </ListGroupItem>    
                        </CSSTransition>         
                ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

Tasks.propTypes = {

}

export default Tasks
