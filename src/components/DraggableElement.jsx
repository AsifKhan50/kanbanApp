import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const DragItem = styled.div`
  padding: 20px;
  border-radius: 6px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  width: 314px;
  height: auto;
  box-sizing: border-box;
  
`;

const Title = styled.h3`
width: 210px;
height: 22px;
margin :4px 0 0 0;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;



color: #0D062D;
`;

const Description = styled.p`
  // margin-bottom: 10px;
  position : relative;
  top : 6px;
  margin: 0%;
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #787486;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 6px;
  width: 281.68px;
border-radius: 8px;
position: relative;
    top: 7px;
`;

const Avatar = styled.img`
   margin-top:28px;
`;
const Section = styled.div`
    display : flex;
    width : auto;
    justify-content: space-between;
    height : 23px;
    border : none
`

const DraggableElement = ({ item, index, droppableId }) => {
  return (
    <Draggable draggableId={`draggable-${item.id}`} index={index}>
      {(provided, snapshot) => (
        <DragItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Section>
            {item.stage === "Low" && (
              <>
                <div className="stageBgLow"><p className="stageLow">{item.stage}</p></div>
                <p style={{
                  margin: "0%", padding: "0%",
                  width: "16px",
                  height: "19px",

                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "-0.07em",

                  color: "#0D062D",
                }}>...</p>
              </>
            )}
            {item.stage === "High" && (
              <>
                <div className="stageBgHigh"><p className="stageHigh">{item.stage}</p></div>
                <p style={{
                  margin: "0%", padding: "0%",
                  width: "16px",
                  height: "19px",

                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "-0.07em",

                  color: "#0D062D",
                }}>...</p>
              </>
            )}
            {item.stage === "Completed" && (
              <>
                <div className="stageBgCmplt"><p className="stageCmplt">{item.stage}</p></div>
                <p style={{
                  margin: "0%", padding: "0%",
                  width: "16px",
                  height: "19px",

                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: "800",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: "-0.07em",

                  color: "#0D062D",
                }}>...</p>
              </>
            )}

          </Section>
          <Title>{item.title}</Title>

          {item.description && <Description>{item.description}</Description>}
          
            {item.image1 && item.image2 && (
              <div className="imgDiv" style={{ display: "flex" }}>
                <Image src={item.image1} alt={item.title} style={{ width: "131px", height: "79px",top:"0px" }} />
                <Image src={item.image2} alt={item.title} style={{ width: "131px", height: "79px",top:"0px"  }} />
                </div>
             
            )}
          {item.image && <Image src={item.image} alt={item.title} />}
          <Avatar src={item.avatar} alt="Avatar" />
        </DragItem>
      )}
    </Draggable>
  );
};

export default DraggableElement;
