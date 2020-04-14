import React,{ useEffect} from 'react'
 import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import {getTasks,delTask,addTask} from '../actions/taskAction'

const Tasks = ({ getTasks,delTask, task:{tasks,loading} }) => {
    useEffect(() => {
        getTasks()  
    },[getTasks])
    return (
        <Container>
            <ListGroup>
                <TransitionGroup className="tasks">
                    {!loading && tasks.map(({ _id, name }) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade" >
                            <ListGroupItem>
                                <Button
                                   color="danger"
                                    style={{marginRight:'1rem'}}
                                    size="sm"
                                    onClick={() => delTask(_id)}
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

 
const map = state => ({
 task:state.task   
})

export default connect(map,{getTasks,delTask,addTask})(Tasks)
