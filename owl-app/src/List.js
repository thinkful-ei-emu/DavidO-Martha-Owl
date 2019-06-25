import React from 'react'


//Participants List

//This file contains a ist of people. There will be ID, name, and avatar properties. 

//We will then render it to the screen.


//Function that gets list name and renders it to the screen

export default function PeopleList(){
    const participants = [
    {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
    {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
    },
    {
        id: 4,
        name: 'Frank Runciman',
        avatar:
            'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
    {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }
]

console.log(participants);
console.log('Line 56 Ran!')

if (participants.onStage === true){
   return "On Stage"
};

const peopleList = participants.map((participant) => (
    <div>
    <img src = {participant.avatar} />
    <li> {participant.name}  </li>
    <p> {participant.onStage ? 'On Stage' : null}  </p>
    </div>
    // <participants key=  {participant.id} name= {participant.name}/> 
)

);

console.log(peopleList)

return(
    <div className = "ListofPeople">
        <ul>
        {peopleList}
        </ul>
    </div>
)

};