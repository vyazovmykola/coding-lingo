import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import{
    DndContext,
    closestCenter
}from "@dnd-kit/core";
import{
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
}from "@dnd-kit/sortable"
import { useState } from 'react';
import SortableItem from './SortableItem.jsx';

function Module(){
    const [languages, setLanguages] = useState(["Java" ,"Arduino", "Python", "React"]);

    function addLanguege(){
        
        const newLanguage = document.getElementById("languageInput").value;
        document.getElementById("languageInput").value = "";

        setLanguages(l => [...languages,newLanguage]);

    }   

    function removeLanguege(){
        setLanguages(l => []);
        

    }

    function handleDragEnd(event){
        console.log("DragEventEnd");
        const {active,over} = event;
        console.log("ACTIVE: " + active.id);
        console.log("OVER: " + over.id);

        if(active.id !== over.id) {
            setLanguages((items) => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);
                console.log(arrayMove(items, activeIndex,overIndex));

                return arrayMove(items, activeIndex,overIndex);
            });
        }
    }

    return(
        <DndContext 
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <Container className='p-3'style={{"width":"50%"}} align="center">
                <h3>The Best Program Languages!</h3>
                <SortableContext
                    items={languages}
                    strategy={verticalListSortingStrategy}
                >

                    {/* components to sort */}
                    {languages.map(language =><SortableItem key={language} id={language} />)}
                </SortableContext>
                <input type='text' id='languageInput' placeholder='Enter your language' required /> 
                <button onClick={addLanguege}>Add</button>
                <button onClick={removeLanguege}>Reset</button>
            </Container>
            
        </DndContext>
    );  
}
export default Module