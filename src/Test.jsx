import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {
    DndContext,
    closestCenter
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useState } from 'react';
import TestSortableItem from './TestSortableItems.jsx';

function Test(){
    const [question, setQuestion] = useState([
        {id: 6,name:"<p>Hello World!!</p>" },
        {id: 7,name:"</body>" },
        {id: 1,name:"<!DOCTYPE html>" },
        {id: 8,name:"</html>" },
        {id: 3,name:"<head>" },
        {id: 4,name:"</head>" },
        {id: 5,name:"<body>" },
        {id: 2,name:"<html>" },
    ]);
    const [answers, setAnswer] = useState([
        {id: 1,name:"<!DOCTYPE html>" },
        {id: 2,name:"<html>" },
        {id: 3,name:"<head>" },
        {id: 4,name:"</head>" },
        {id: 5,name:"<body>" },
        {id: 6,name:"<p>Hello World!!</p>" },
        {id: 7,name:"</body>" },
        {id: 8,name:"</html>" },
    ]);

    const[color,setColor] = useState("#ff2d32")

    function updateColor(){
        setColor(" #80ff00");
    }
    function  backColor(){
        setColor("#ff2d32");
    }

    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    function CheckAnswer(){
        console.log("checking answers");
        
        const userAnswer = question.map(q => q.id);
        const correctAnswerId = answers.map(a => a.id);

        const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswerId);

        setIsAnswerCorrect(isCorrect);

        if(isCorrect){
            console.log("corect");
            updateColor()


        }else{
            console.log("incorect");
            backColor()
        }
    }

    function handleDragEnd(event){
        const {active, over} = event;

        if(over && active.id !== over.id) {
            setQuestion((items) => {
                const activeIndex = items.findIndex(item => item.id === Number(active.id));
                const overIndex = items.findIndex(item => item.id === Number(over.id));
                console.log(arrayMove(items, activeIndex, overIndex));

                return arrayMove(items, activeIndex, overIndex);
            });
        }
    }


    return(
        <DndContext 
            onDragEnd={handleDragEnd}
        >
            <Container className='p-3'style={{"width":"50%"}} align="center">
                <h3  style={{backgroundColor:color}}>The Best Program Languages!</h3>
                <SortableContext
                    items={question.map(q => q.id)}
                    strategy={verticalListSortingStrategy}
                >

                    {/* components to sort */}
                    {question.map(q => 
                    <TestSortableItem key={q.id} name={q.name} id={q.id}/>)}
                </SortableContext>
                <button onClick={CheckAnswer}>Check</button>
            </Container>
            
        </DndContext>
    );  

}
export default Test