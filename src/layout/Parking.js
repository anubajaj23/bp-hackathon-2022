import React from "react";
import "./parking.css";


function App() {

  // const ontick =(e) => {
  //   // setActive(current => !current);
  //   e.currentTarget.classList.toggle('hidden');
  //   document.querySelector(".parkingLayout").classList.toggle('hidden');
  // };
  

  const handler = (e) => {
    console.log(e.target);
    // console.log(dayjs().startOf('day').format("YYYY-MM-DD"));
  };

  return (
    <>
      {/* <input type="button" value="Create" /> */}

      {/* <input
        className="datelabel"
        type="date"
        id="dt"
        onChange={handler}
        min={new dayjs().startOf("day").format("YYYY-MM-DD")}
        defaultValue={new dayjs().startOf("day").format("YYYY-MM-DD")}
      /> */}

<div className="layoutSelection">
      <table className="parkingLayout">
        <thead>
          <tr>
            <td colSpan="4"> <h3 className="mt-5 mb-3">Parking Slots </h3></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <input id="sl_1" onClick={handler} type="radio" name="slot" value="sl_1" />
                <label htmlFor="sl_1" className="parking booked">Anand (Booked)</label>
              
            </td>
            <td>
                <input id="sl_2" onClick={handler} type="radio" name="slot" value="sl_2" />
                <label htmlFor="sl_2" className="parking"></label>
              
            </td>
            <td>
                <input id="sl_3" onClick={handler} type="radio" name="slot" value="sl_3" disabled />
                <label htmlFor="sl_3" className="parking reserved">Gaurav (Reserved)</label>
              
            </td>
            <td>
                <input id="sl_4" onClick={handler} type="radio" name="slot" value="sl_4" />
                <label htmlFor="sl_4" className="parking"></label>
              
            </td>
          </tr>

          <tr>
            <td>
                <input id="sl_5" onClick={handler} type="radio" name="slot" value="sl_5" />
                <label htmlFor="sl_5" className="parking"></label>
              
            </td>
            <td>
                <input id="sl_6" onClick={handler} type="radio" name="slot" value="sl_6" disabled />
                <label htmlFor="sl_6" className="parking reserved">Anurag (Reserved)</label>
              
            </td>
            <td>
                <input id="sl_7" onClick={handler} type="radio" name="slot" value="sl_7" />
                <label htmlFor="sl_7" className="parking"></label>
              
            </td>
            <td>
                <input id="sl_8" onClick={handler} type="radio" name="slot" value="sl_8" />
                <label htmlFor="sl_8" className="parking"></label>
              
            </td>
          </tr>
          
          <tr>
            <td>
                <input id="sl_9" onClick={handler} type="radio" name="slot" value="sl_9" />
                <label htmlFor="sl_9" className="parking"></label>
              
            </td>
            <td>
                <input id="sl_10" onClick={handler} type="radio" name="slot" value="sl_10" disabled />
                <label htmlFor="sl_10" className="parking booked">Madhur (Booked)</label>
              
            </td>
            <td>
                <input id="sl_11" onClick={handler} type="radio" name="slot" value="sl_11" />
                <label htmlFor="sl_11" className="parking"></label>
              
            </td>
            <td>
                <input id="sl_12" onClick={handler} type="radio" name="slot" value="sl_12" />
                <label htmlFor="sl_12" className="parking"></label>
              
            </td>
          </tr>
        </tbody>
       
      </table>

      {/* <input type="button" value="Next"  onClick={ontick}/> */}

      </div>
    </>
  );
}
export default App;
