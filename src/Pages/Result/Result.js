import { Button } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Result.css'

function Result({name, score}) {

    const history = useHistory();

    useEffect(() => {

        if(!name){
            history.push("/")
        }
      
    }, [name, history]);

    return (
        <div className='result'>
            <span className='title'>Final Score: {score}</span>
            <Button
             variant="contained"
             color="secondary"
             size="large"
             style={{alignSelf:"center", marginTop:10}}
             href="/"
            >Home Page</Button>
        </div>
    )
}

export default Result
