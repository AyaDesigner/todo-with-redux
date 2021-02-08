import React from 'react';
// import Button from '@material-ui/core/Button';
import { store } from '../redux/store';
import { deleteTodo } from '../redux/actions';
import { editTodo } from '../redux/actions';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from './Button';
import TextField from '@material-ui/core/TextField';








const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const TodoItem = ({ todo, numberTask }) => {


    const [todoName, setTodoName] = React.useState(todo.name);
    const [isEditable, setIsEditable] = React.useState(false);

    const handleOnChangeInput = (ev) => {
        setTodoName(ev.target.value)
    }



    const classes = useStyles();


    const deleteTodoFromList = () => {
        store.dispatch(deleteTodo(todo.id))
    }

    const editTodoFromList = () => {
        store.dispatch(editTodo({
            id: todo.id,
            name: todoName
        }))
    }




    return (
        <div>
            <Grid container spacing={3}
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={3}>
                    {isEditable ? <TextField id="outlined-basic" value={todoName} variant="outlined" size="small" onChange={handleOnChangeInput} /> :
                        <Paper className={classes.paper} onClick={() => setIsEditable(true)}>{++numberTask}. {todoName}  </Paper>
                    }
                </Grid>
                <Grid item xs={2}>
                    <Box pt={1} m={1}>

                        {isEditable ? <Button variant="contained" color="primary" size="large" m={1} onClick={editTodoFromList}>Save</Button> :
                            <Button variant="contained" color="default" size="large" m={1} onClick={deleteTodoFromList}>Delete</Button>
                        }
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default TodoItem;