import "./DetailRecipe.css"
import { MdStars } from 'react-icons/md';

export default function DetailRecipe() {
    return (
        <div className="div-Recipe">
            <div className="general-div">
                <div className="detail-title-div">
                    <MdStars size={40} className="fav-icon"/>
                    <h2 className="detail-title">NOM RECEPTA</h2>
                    <div className="prepareButt-div"><button className="prepareButt" >Prepare / add</button></div>
                </div>

                <div className="three-elements-div">
                    <div className="photo-ingredients-div">
                        <div className="foto-div">
                            <p>foto de la recepta</p>
                        </div>

                        <div className="detail-ingredients-div">
                            <p>ingredients</p>
                        </div>
                    </div>
                    
                    <div className="detail-description-div">
                        <p>Desctipcio de la recepta</p>
                    </div>
                </div>          
            </div>
        </div>
    );

}