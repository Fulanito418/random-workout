const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000


const workouts = {
    'pushups': {
        'name': 'pushups',
        'reps': '8-12',
        'sets': '2-4'
    },
    'leglifts': {
        'name': 'leglifts',
        'reps': '10-20',
        'sets': '2-4'
    },
    'unknown': {
        'name': 'unknown',
        'reps': 'unknown',
        'sets': 'unknown'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    
    //console.log(request.params.name)
    const workout = request.params.name
    
    if( workouts[workout] ) {
        response.json(workouts[workout])  
    } else {
        workout['unknown']
    }
    
});

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Beta go catch it!`)
})