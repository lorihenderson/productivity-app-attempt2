import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function NavBar () {

    return (
        <>
        <div>
    <ListGroup className="list">
    <ListGroup.Item variant="warning" className="list">
        <Button className="btn" variant="light" size="lg" active>
        Sunday
        </Button>
        <Button className="btncolor" variant="primary" size="lg" active>
        Monday
        </Button>
        <Button className="btn" variant="light" size="lg" active>
        Tuesday
        </Button>
        <Button className="btncolor" variant="primary" size="lg" active>
        Wednesday
        </Button>
        <Button className="btn" variant="light" size="lg" active>
        Thursday
        </Button>
        <Button className="btncolor" variant="primary" size="lg" active>
        Friday
        </Button>
        <Button className="btn" variant="light" size="lg" active>
        Saturday
        </Button>
        </ListGroup.Item>
        </ListGroup>
        </div>
        </>
    )
}

export default NavBar;