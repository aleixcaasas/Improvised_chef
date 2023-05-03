import './errorMessage.css';
import { BiConfused } from 'react-icons/bi';

export default function ErrorLoginRegister(props) {

    const {errorMessage } = props;

    return (
        <div className="error_container">
            <h2 className='errorMessage'>Something went wrong!</h2>
            <h3 className='errorMessage'>{errorMessage}</h3>
            <BiConfused size={30} className='confusedButton' />
            <button className="retryButton" type="submit" onClick={() => {props.clicked("true");}} >Try Again</button>
        </div>
    );
}