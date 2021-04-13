import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function Mapy() {
  const history = useHistory()
  const coordinateFromredux = useSelector(state => state.food)
  let coordinateFromdb = coordinateFromredux.map(el => el.coordinate).map(el => el.split(' ').map(el => Number(el)).reverse())
  let final = coordinateFromdb;

  const handlerclick = (e) => {
    let tmp = e.reverse().map(el => String(el)).join(' ')
    let mark = coordinateFromredux.find(el => el.coordinate === tmp)
    history.push(`/food/${mark._id}`)
  }
  //Тут необходимо тянуть все геометки из базы и отражать их на карте
  return (



    <YMaps query={{ load: "package.full" }}>
      <div>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%" height="100vh">
          {final.map(coordinate => <Placemark geometry={coordinate} onClick={(e) => handlerclick(coordinate)} />)}
        </Map>
      </div>
    </YMaps>
    // <article className="entry">

    //   <iframe className="bigmap" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4bf8f48277f7c78bc409de190e483b51b3ed57a9e7919df49e56f328714fe2d3&amp;source=constructor" width="100%" height="739" frameborder="0"></iframe>


    // </article>
  )
}

export default Mapy
