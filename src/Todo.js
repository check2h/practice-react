import React, { useState } from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';



const Todo = (props) => {
    const [item] = useState(props.todoItem);

    const [readOnly, setReadOnly] = useState(true);

    const editItem = props.editItem;

    const deleteItem = props.deleteItem;

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        if (e.key === "Enter") {
            setReadOnly(true);
        }
    }

    const deleteEventHandler = () => {
        deleteItem(item);
    };

    const editEventHandler = (e) => {
        item.done = e.target.checked;
        editItem();
    }

    const editTextEventHandler = (e) => {
        item.title = e.target.value;
        editItem();
    }

    return (
        /* 
        [ 머터리얼 UI 를 입히기전 코드 ]
        <div>
            <input type="checkbox" id={item.id} checked={item.done}/>
            <label for={item.id}>{item.title}</label>
        </div>
        */
        <ListItem>
            <Checkbox checked={item.done} onChange={editEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked", readOnly: readOnly }}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editTextEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete Todo' onClick={deleteEventHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
export default Todo;