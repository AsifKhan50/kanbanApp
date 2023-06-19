import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 6px;
`;

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`;

const ListItem = ({ item, index }) => {
  return (
    <Draggable draggableId={`draggable-${item.id}`} index={index}>
      {(provided, snapshot) => (
        <DragItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <Image src={item.image} alt={item.title} />
          <Avatar src={item.avatar} alt="Avatar" />
        </DragItem>
      )}
    </Draggable>
  );
};

export default ListItem;
