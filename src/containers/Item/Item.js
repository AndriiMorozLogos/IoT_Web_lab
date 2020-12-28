import React, { useState, useEffect } from "react";
import "../CardItem/CardItem.css";
import axios from "axios";
import ImageModel1 from "../../Icons/idk_shrug_only_1024x.png";
import CardItem from "../../containers/CardItem/CardItem";

function Item(props) {
  const [mouse, setMouse] = useState({});

  const getItem = async () => {
    try {
      const query = window.location.pathname;
      const vars = query.split("/");
      const itemId = vars[2];
      const item = await axios.get(`/mouses/id=${itemId}`).then((response) => {
        console.log(response.data);
        setMouse(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
    <CardItem
            productionYear={mouse.productionYear}
            producerName={mouse.producerName}
            priceInUaH={mouse.priceInUaH}
            color={mouse.color}
            numberOfButton = {mouse.numberOfButton}
            cableForPower = {mouse.cableForPower}
            weightInKilograms = {mouse.weightInKilograms}
            id={mouse.id}
            imageSrc = {ImageModel1}
          />
    </div>
  );
}

export default Item;
