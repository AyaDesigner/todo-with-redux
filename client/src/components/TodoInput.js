import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {store} from '../redux/store';
import {addTodo} from '../redux/actions';
import {nanoid} from 'nanoid';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch'
        },
    },
}));

const TodoInput = () => {

    const classes = useStyles();
    const [input, setInput] = React.useState("");

    const handleOnChangeInput = (ev) => {
        setInput(ev.target.value);
    }

    const addTodoToList = () => {
        store.dispatch(
            
            addTodo(
                {
                id: nanoid(),
                name: input
                }
            )
        
        
        
        )

    }

    return (
        <Box component="span" m={1}>
            <h2>Add your todo for today</h2>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Add todo" variant="outlined" size="small" onChange={handleOnChangeInput}/>
                    <Button variant="contained" color="secondary" size="large" onClick={addTodoToList}>
                        Add
                    </Button>
                </form>
            </div>
        </Box>
    );
}

export default TodoInput;