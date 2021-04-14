import React from 'react'
import { useHistory } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function MapMini({ coordinate }) {
  const history = useHistory()
  let coordinateFromdb = coordinate.split(' ').map(el => Number(el)).reverse()
  const coordinates = [coordinateFromdb];
  // const clickHandler = () => {
  //   history.push('/')
  // }
  return (
    <>
      <YMaps>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%" >
            {coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate}  />)}
          </Map>
        </div>
      </YMaps>
      {/* <div id="map" style="width: 600px; height: 400px"></div> */}
      {/* <main id="main">
     <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4bf8f48277f7c78bc409de190e483b51b3ed57a9e7919df49e56f328714fe2d3&amp;source=constructor" width="100%" height="339" frameborder="0"></iframe>
       </main>  */}
    </>
  )
}

export default MapMini
