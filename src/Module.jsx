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

function Module(){
    const [languages, setLanguages] = useState(["Java","Arduino", "Python", "React"]);

    function handleDragEnd(event){
        console.log("DragEventEnd");
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
                </SortableContext>
            </Container>
            
        </DndContext>
    );
}
export default Module