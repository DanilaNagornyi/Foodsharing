import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FileBase from "react-file-base64";
import { Link } from "react-router-dom";
import { addFood } from "../../redux/AC/foodAC";
import { setError } from "../../redux/AC/errorAC";

const FoodForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setError(''))
    }
  }, [])
  const err = useSelector(state => state.error)
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    photo: "",
    validUntil: "",
    geolocation: "",
    quantity: "",
    category: "",
    city: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFood(inputs));
    setInputs({
      name: "",
      description: "",
      photo: "",
      validUntil: "",
      geolocation: "",
      quantity: "",
      category: "",
      city: "",
    });
    setTimeout(() => {
      history.push("/food");
    }, 3000)

  };

  return (
    <>
      <main id="main"></main>
      {/* <!-- main --> */}

      <div className="main-w3layouts wrapper maindiv">
        <h1>{err}</h1>
        <h1>Добавление продукта</h1>
        <div className="main-agileinfo">
          <div className="agileits-top formdesign">
            <form className="" onSubmit={handleSubmit}>
              <input
                className="text inputformdecor"
                type="text"
                name="name"
                placeholder="Название"
                required=""
                value={inputs.name}
                onChange={handleChange}
              />
              <select
                className="text email selectformdecor"
                placeholder="Категория"
                value={inputs.category}
                onChange={handleChange}
                name="category"
              >
                <option default>Выберите категорию</option>
                <option value="Fruits">Фрукты</option>
                <option value="Vegetables">Овощи</option>
                <option value="Cereals">Крупы</option>
                <option value="BakeryProducts">Хлебобулочные изделия</option>
                <option value="BabyFood">Детское питание</option>
                <option value="Beverages">Напитки</option>
                <option value="MilkProducts">Молочные продукты</option>
              </select>

              <input
                className="text email inputformdecor"
                type="text"
                name="description"
                placeholder="Описание"
                required=""
                value={inputs.description}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="geolocation"
                placeholder="Город"
                required=""
                value={inputs.geolocation}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="text"
                name="city"
                placeholder="Адрес"
                required=""
                value={inputs.city}
                onChange={handleChange}
              />
              {/* <input className="text email inputformdecor inputphoto input-file" id="file" type="file" name="photo" multiple accept="image/*" placeholder="Загрузить фото" required="" />
              <label for="file" className="btn btn-tertiary js-labelFile">
                <i className="icon fa fa-check"></i>
                <span className="js-fileName"> Загрузить фото</span>
              </label> */}
              <FileBase
                className="text email inputformdecor inputphoto input-file"
                id="file"
                type="file"
                multiple={false}
                onDone={({ base64 }) => setInputs({ ...inputs, photo: base64 })}
              />

              <input
                className="text email inputformdecor"
                type="text"
                name="quantity"
                placeholder="Количество"
                required=""
                value={inputs.quantity}
                onChange={handleChange}
              />
              <input
                className="text email inputformdecor"
                type="date"
                name="validUntil"
                placeholder="Действительно до"
                required=""
                value={inputs.validUntil}
                onChange={handleChange}
              />
              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required="" />
                  <span className="textoncheckbox">
                    Я согласен с условиями платформы!
                  </span>
                </label>
                <div className="clear"> </div>
              </div>
              <button className="btnlogin">ДОБАВИТЬ</button>
            </form>
            <p>
              Вы передумали? <Link to="/profile"> Выйти</Link>
            </p>
          </div>
        </div>
        <ul className="colorlib-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* <!-- //main --> */}
    </>
  );
};

export default FoodForm;
