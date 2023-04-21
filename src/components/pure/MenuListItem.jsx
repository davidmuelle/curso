import { List, ListItem, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Home, Settings, Task } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"

//esto es una funcion para que me devuelva los diferentes iconos que hay

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home />)

        case 'TASK':
            return (<Home />)

        case 'SETTINGS':
            return (<Settings />)

        default:
            break;
    }
}

//lista de opcioens que va a tener
const MenuListItem = ({ list }) => {
    const history = useNavigate()
    const navigate = (path) => {
        history(path)
        return (
            <List>
                {list.map(({text,path,icon},index)=>{
                    (<ListItem key={index}  onClick={()=>navigate(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>

                    <ListItemText primary={text}/>
                    </ListItem>
                    )
                })}
            </List>
        )

    }
}


export default MenuListItem;