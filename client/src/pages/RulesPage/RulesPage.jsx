import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rules from "../../components/Rules/Rules"


const RulesPage = () => {

  const auth = useSelector(state => state.user.isAuth)
  return ( 
    <>
    <Rules/>
    
    {!auth ? 
      <div сlassName="blablahyi" >
        <Link to='registration' className="btn-faq" >Регистрация</Link>
      </div>
      :
      null
  }
    </>
   );
}
 
export default RulesPage;
