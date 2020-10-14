import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
Home.propTypes = {
    
};

function Home(props) {
    const [nasa, setNasa] = useState([]);
    console.log(nasa);

    const keyAPI = "jyBW9MdRB6m4OYr0LKkJasIKn4OIn8nj5Ur0cTPf";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${keyAPI}`;

    useEffect(() => {
        axios.get(url)
            .then(response =>{
                const res = response.data;
                setNasa(res);
            })
    }, []);
    
    return (
        <div>
            <Card>
                <CardImg src={nasa.url}/>
                <CardBody>
                <CardTitle>{nasa.title}</CardTitle>
                <CardText>{nasa.explanation}</CardText>
                <CardText>
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    {nasa.date}
                </CardText>
                </CardBody>
            </Card>           
        </div>
    );
}

export default Home;