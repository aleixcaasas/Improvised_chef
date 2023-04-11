import './Resume_recipe.css'
import {TbPoint,TbPointFilled,TbPlant,TbClockHour4,TbMeat}from "react-icons/tb";



export default function Resume_recipe ({singleReceipts}){

    const title = singleReceipts.title; 
    const image = singleReceipts.image;
    const time = singleReceipts.time_preparation;
    const cookTime = singleReceipts.time_cooking;
    const difficulty = singleReceipts.difficulty;
    const ingridients = singleReceipts.ingredients;
    
    function calculate_time_in_minutes (time, cookTime) {
        
        let total_time_min = 0;
        
        const match_hr_preparation = time.match(/(\d+)\s+hr/);
        const match_hr_cooking = cookTime.match(/(\d+)\s+hr/);
        const match_min_preparation = time.match(/(\d+)\s+mins/);
        const match_min_cooking = cookTime.match(/(\d+)\s+mins/);

        if (match_hr_preparation) {
            total_time_min = total_time_min + (parseInt(match_hr_preparation[1], 10)*60);
        }
        if (match_hr_cooking) {
            total_time_min = total_time_min + (parseInt(match_hr_cooking[1], 10)*60);
        }
        if (match_min_preparation) {
            total_time_min = total_time_min + parseInt(match_min_preparation[1], 10);
        }
        if (match_min_cooking) {
            total_time_min = total_time_min + parseInt(match_min_cooking[1], 10);
        }

        return <p>{total_time_min} min</p>;
    }
    
    function set_difficulty(difficulty) {
        return (
          <>
            {difficulty === "Easy" ? (
                <>
                <TbPointFilled size={20}/>
                <TbPoint size={20}/>
                <TbPoint size={20}/>
                </>
            ) : difficulty === "Medium" ? (
                <>
                <TbPointFilled size={20}/>
                <TbPointFilled size={20}/>
                <TbPoint size={20}/>
                </>
            ) : difficulty === "Difficult" ? (
                <>
                <TbPointFilled size={20}/>  
                <TbPointFilled size={20}/>
                <TbPointFilled size={20}/>
                </>
            ) :null}
          </>
        );
      }
    
    function show_ingridients_numbers(list)  {
        return list.length;
    }

    function show_icons_ingridient(ingridients) {   
        
        const ingridients_to_check = ["chicken", "pork", "turkey", "cod"];

        const hasMeat = ingridients_to_check.some((meat) => {
            return ingridients.some((ingridient) => {
                return ingridient.name.includes(meat);
            }); 
        });

        return (
            <>{hasMeat ? <TbMeat size="20"/> : <TbPlant size="20"/>}</>
        );
    }
    
    return (
        <div className="Receipt">
            <div className="image_receipt" style={{backgroundImage: `url("${image}")`}}></div>
            <div className="content_recepit">
                <h2 className ="title_recepit_resume">{title}</h2>
                <div className="details_preparation">
                <table>
                    <tr>
                        <th><TbClockHour4 size= "22"/></th>
                        <th>{show_icons_ingridient(ingridients)}{show_ingridients_numbers(ingridients)}</th>
                        <th>{set_difficulty(difficulty)}</th>
                    </tr>   
                    <tr>
                        <td>{calculate_time_in_minutes (time, cookTime)}</td>
                        <td>Ingridients</td>
                        <td>Difficulty</td>
                    </tr>  
                </table>   
                </div>
                <button id = "green">Want to know more</button>
            </div>
            
        </div>  
    );
}