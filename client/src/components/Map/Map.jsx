import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { YMaps, Map, Placemark, Clusterer } from "react-yandex-maps";

function Mapy() {
  const coordinateFromredux = useSelector((state) => state.food);
  const history = useHistory();

  let coordinateFromdb = coordinateFromredux
    .map((el) => el.coordinate)
    .map((el) =>
      el
        .split(" ")
        .map((el) => Number(el))
        .reverse()
    );
  let final = coordinateFromdb;

  const handlerclick = (e) => {
    let tmp = e
      .reverse()
      .map((el) => String(el))
      .join(" ");
    let mark = coordinateFromredux.find((el) => el.coordinate === tmp);
    history.push(`food/${mark._id}`);
  };

  return (
    <YMaps query={{ load: "package.full" }}>
      <div>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          width="100%"
          height="100vh"
        >
          {final.map((coordinate) => (
            <Placemark
              onClick={() => handlerclick(coordinate)}
              geometry={coordinate}
              options={{
                iconLayout: "default#image",
                iconImageHref: "/assets/img/typeIcons/broccoli.png",
                iconImageSize: [30, 30],
                iconImageOffset: [0, 0],
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
}

export default Mapy;
