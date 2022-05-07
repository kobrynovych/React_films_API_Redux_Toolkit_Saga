import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_USER_FETCH } from "../store/sagas";

function User() {
    const user = useSelector(state => state.users_reducer.user);

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch({type: GET_USER_FETCH, id});
    }, [id]);

    console.log('User');

    return ( 
        <div>
            {user?.id ? 
                <Card>
                    <Card.Img variant="top" src={user.image} />
                    <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {user.status}
                    </Card.Text>
                    </Card.Body>
                </Card>
            : 'Not user'}
        </div>
     );
}

export default User;