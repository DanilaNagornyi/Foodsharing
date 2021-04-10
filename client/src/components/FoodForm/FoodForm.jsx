const FoodForm = () => {
  return ( 
    <>
    <main id="main"></main>
      {/* <!-- main --> */}
	<div className="main-w3layouts wrapper maindiv">
		<h1>Добавление продукта</h1>
		<div className="main-agileinfo">
			<div className="agileits-top formdesign">
				<form className="" action="#" method="post">

					<input className="text inputformdecor" type="text" name="name" placeholder="Название" required="" />

          <select className="text email selectformdecor" placeholder="Категория">
            <option disabled>Выберите категорию</option>
            <option>Фрукты</option>
            <option>Овощи</option>
            <option>Выпечка</option>
          </select>
          
					<input className="text email inputformdecor" type="text" name="description" placeholder="Описание" required="" />
					<input className="text email inputformdecor" type="text" name="geolocation" placeholder="Город" required="" />
					<input className="text email inputformdecor" type="text" name="adress" placeholder="Адрес" required="" />
					<input className="text email inputformdecor inputphoto input-file" id="file" type="file" name="photo" multiple accept="image/*" placeholder="Загрузить фото" required="" />
          <label for="file" className="btn btn-tertiary js-labelFile">
            <i className="icon fa fa-check"></i>
            <span className="js-fileName"> Загрузить фото</span>
        </label>

					<input className="text email inputformdecor" type="text" name="quantity" placeholder="Количество" required="" />
					<input className="text email inputformdecor" type="text" name="validUntil" placeholder="Действительно до" required="" />
					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required="" />
							<span className="textoncheckbox">Я согласен с условиями платформы!</span>
						</label>
						<div className="clear"> </div>
					</div>
          <button className="btnlogin">ДОБАВИТЬ</button>


				</form>
				<p>Вы передумали? <a href="#"> Выйти</a></p>
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
}
 
export default FoodForm;
