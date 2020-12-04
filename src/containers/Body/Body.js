import React from "react";
import ImageModel1 from "../../Icons/idk_shrug_only_1024x.png";
import CardItem from "../../containers/CardItem/CardItem";


const data = [
  {
    title: "idk 1",
    text:"Something new idk 1",
    image: ImageModel1,
    price: 715,
  },
  {
    title: "idk 2",
    text: "Something new idk 2",
    image: ImageModel1,
    price: 540,
  },
  {
    title: "idk 3",
    text:"Something new idk 3",
    image: ImageModel1,
    price: 1610,
  },
];

function Body() {
  return (
    <ul className="items">
     
     {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
    </ul>
  );
}

export default Body;