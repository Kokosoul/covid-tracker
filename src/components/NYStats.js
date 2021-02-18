import { useNYData } from "hooks/useData";
import  Skull from 'assets/poison.svg';

function format_num(num = 0){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


}

const NYStats = () => {
    const { isLoading, data } = useNYData();
    return !isLoading && data && (
        <div className="h-100 d-flex justify-content-center align-items-center w-100">
            <div className="text-center">
                <h2>Total Cases:</h2>
                <h3>{format_num(data.total)}</h3>
                <h2 >New Positive Cases:</h2>
                <h3>{format_num(data.positiveIncrease)}</h3>
                <h2>Total Death:</h2>
                <h3> <img src={Skull} alt="" className="mw-100 m-1" style={{width: 25}}/><span>{format_num(data.death)}</span></h3>
                <h2>New Death:</h2>
               <h3> <img src={Skull} alt="" className="mw-100 m-1" style={{width: 25}}/> <span>{format_num(data.deathIncrease)}</span> </h3>
               <p className="mt-5 text-muted"><i>updated on: {data.dateChecked.substring(0, 10)}</i></p>
            </div>
        </div>
    )
}

export default NYStats;