import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import TodoImg from "./images/Todo.svg"
import AddSquare from "./images/add-square.svg"
import itemCnt from "./images/itemCnt.svg"
import progressImg from "./images/onProgress.svg"
import doneImg from "./images/Done.svg"
import progressimg from "./images/onProgressImg1.svg"
import comment1 from "./images/item1Cmnt.svg"
import comment2 from "./images/comment2.svg"
import comment4 from "./images/comment4.svg"
import comment5left from "./images/commetn5left.svg"
import comment5right from "./images/comment5right.svg"
import comment5 from "./images/comment5.svg"
import comment7 from "./images/comment7.svg"
import comment8 from "./images/comment8.svg"
import image7 from "./images/image7.svg"

const DragDropContextContainer = styled.div`
  width: auto;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1440px) {
    flex-direction: column; 

  }
`;

const ColumnContainer = styled.div`
  margin: 0;
  width: 354px;
height: 625px;

background: #F5F5F5;
border-radius: 16px 16px 0px 0px;
overflow-y : hidden;

@media (max-width: 1440px) {
    margin : 0px auto; 
      height : auto;
  }
`;

const ColumnTitle = styled.h2`
  margin-bottom: 16px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-gap: 28px;
 
  width: 314px;
    margin: auto;
    position: relative;
    top: 28px;
`;

function DragList() {
    const data = [
        {

            id: 1,
            title: "Brainstorming",
            stage: "Low",
            description: "Brainstorming brings team members' diverse experience into play. ",
            
            
            avatar: `${comment1}`,
            // Add other properties as needed
        },
        {
            id: 2,
            title: "Research",
            stage: "High",
            description: "User research helps you to create an optimal product for users.",
            avatar: `${comment2}`,
            // Add other properties as needed
        },
        {
            id: 3,
            title: "Wireframes",
            stage: "High",
            description: "Low fidelity wireframes include the most basic content and visuals.",          
            avatar: `${comment2}`,
        },
        {
            id: 4,
            title: "Onboarding Illustrations ",
            stage: "Low",
            image: `${progressimg}`,
            avatar: `${comment4}`,
        },
        {
            id: 5,
            title: "Moodboard",
            stage: "Low",
           
            image1: `${comment5left}`,
            image2: `${comment5right}`,
            avatar: `${comment5}`,
        },
        {
            id: 6,
            title: "Item 6",
            stage: "Low",
            description: "Description for Item 6",
            avatar: `${comment2}`,
        },
        {
            id: 7,
            title: "Mobile App Design",
            stage: "Completed",
            
            image: `${image7}`,
            avatar: `${comment7}`,
        },
        {
            id: 8,
            title: "Design System",
            stage: "Completed",
            description: "It just needs to adapt the UI from what you did before ",
            avatar: `${comment8 }`,
        },
        {
            id: 9,
            title: "Item 9",
            stage: "Completed",
            description: "Description for Item 9",
            image: "path_to_image2.jpg",
            avatar: `${comment8 }`
        }
        // Add more items as needed
    ];

    const [todo, setTodo] = React.useState(data.slice(0, 3));
    const [progress, setProgress] = React.useState(data.slice(3, 6));
    const [complete, setComplete] = React.useState(data.slice(6, 9));

    useEffect(() => {
        setTodo(data.slice(0, 3));
    }, []);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const sourceList = getList(result.source.droppableId);
        const destinationList = getList(result.destination.droppableId);

        const [removedElement] = sourceList.splice(result.source.index, 1);
        destinationList.splice(result.destination.index, 0, removedElement);

        updateList(result.source.droppableId, sourceList);
        updateList(result.destination.droppableId, destinationList);
    };

    const getList = (droppableId) => {
        if (droppableId === "droppable-todo") {
            return todo;
        } else if (droppableId === "droppable-progress") {
            return progress;
        } else if (droppableId === "droppable-complete") {
            return complete;
        }
        return [];
    };

    const updateList = (droppableId, updatedList) => {
        if (droppableId === "droppable-todo") {
            setTodo(updatedList);
        } else if (droppableId === "droppable-progress") {
            setProgress(updatedList);
        } else if (droppableId === "droppable-complete") {
            setComplete(updatedList);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <DragDropContextContainer>
                 <div className="columnLeft" style={{display:"flex", justifyContent:"space-between", width:"723px"}}>
                <ColumnContainer>
                    <div className="todo" >
                        <div className="todoLeft">

                        <img src={TodoImg} alt="" />
                        <ColumnTitle style={{
                            width: "45px",
                            height: "19px",
                            margin:"0%",
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "19px",
                            
                            color: "#0D062D"
                        }}>To Do</ColumnTitle>
                        <div style={{display:"flex",alignItems:"center"}}>
                         <p style={{position:"relative",left:"13px",fontSize:"14px",lineHeight:"21px"}}>{todo.length}</p>
                        <img src={itemCnt} alt="" />
                        </div>
                        </div>
                        <img src={AddSquare} alt="" />
                    </div>
                    <div className="vector1"></div>
                    <Droppable droppableId="droppable-todo">
                        {(provided) => (
                            <ListGrid ref={provided.innerRef} {...provided.droppableProps}>
                                {todo.map((item, index) => (
                                    <DraggableElement
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        droppableId="droppable-todo"
                                    />
                                ))}
                                {provided.placeholder}
                            </ListGrid>
                        )}
                    </Droppable>
                </ColumnContainer>
                <ColumnContainer>
                    <div className="progress">
                        <div className="progressLeft">
                          <img src={progressImg} alt="" />
                        <ColumnTitle style={{
                            width: "95px",
                            height: "19px",
                            margin:"0%",
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "19px",
                            
                            color: "#0D062D"
                        }}>On Progress</ColumnTitle>
                        <div style={{display:"flex",alignItems:"center"}}>
                         <p style={{position:"relative",left:"13px",fontSize:"14px",lineHeight:"21px"}}>{progress.length}</p>
                        <img src={itemCnt} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="vector2"></div>
                    <Droppable droppableId="droppable-progress">
                        {(provided) => (
                            <ListGrid ref={provided.innerRef} {...provided.droppableProps}>
                                {progress.map((item, index) => (
                                    <DraggableElement
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        droppableId="droppable-progress"
                                    />
                                ))}
                                {provided.placeholder}
                            </ListGrid>
                        )}
                    </Droppable>
                </ColumnContainer>
                </div>
              
                <ColumnContainer>
                    <div className="Done">
                        <div className="doneLeft">
                           <img src={doneImg} alt="" />
                        <ColumnTitle style={{
                            width: "41px",
                            height: "19px",
                            margin:"0%",
                            fontFamily: 'Inter',
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "19px",
                            
                            color: "#0D062D"
                        }}>Done</ColumnTitle>
                           <div style={{display:"flex",alignItems:"center"}}>
                         <p style={{position:"relative",left:"13px",fontSize:"14px",lineHeight:"21px"}}>{progress.length}</p>
                        <img src={itemCnt} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="vector3"></div>
                    <Droppable droppableId="droppable-complete">
                        {(provided) => (
                            <ListGrid ref={provided.innerRef} {...provided.droppableProps}>
                                {complete.map((item, index) => (
                                    <DraggableElement
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        droppableId="droppable-complete"
                                    />
                                ))}
                                {provided.placeholder}
                            </ListGrid>
                        )}
                    </Droppable>
                </ColumnContainer>
            </DragDropContextContainer>
        </DragDropContext>
    );
}

export default DragList;
