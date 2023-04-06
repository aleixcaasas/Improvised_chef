import './ErrorLoginRegister.css';
import { NavLink } from 'react-router-dom';
import { BiConfused } from 'react-icons/bi';

export default function ErrorLoginRegister() {
    
    return(
        <div className="container">
            <h2 className='errorMessage'>Something went wrong!</h2>
            <h3 className='errorMessage'>Invalid mail or password</h3>
            <BiConfused size={30} className='confusedButton'/>
            <NavLink to="../components"><button className="retryButton" type="submit" >Retry</button></NavLink>           
        </div>
    );
}