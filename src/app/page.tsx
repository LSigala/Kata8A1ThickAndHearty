'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function obtainNumbers(e: any){
        e.preventDefault();
    
        const data = {
            Array1: (e.target.array1.value),
            Array2: (e.target.array2.value)
        }
        
        if (data.Array1.trim().length === 0 || data.Array2.trim().length === 0) {
          alert("Arrays cannot be null")
        }else{
          const array = data.Array1.split(", ");
          const array2 = data.Array2.split(", ");
          const obtainNumbers:Array<any> = new Array<any>()
          
          for(let item of array){
            for(let item2 of array2){
            if (Number(item) + Number(item2) == array.length || Number(item) - Number(item2) == array.length){
              if(item != item2 && array.includes(item2) && array2.includes(item2) && array.includes(item) && array2.includes(item)){
                obtainNumbers.push(item)
              }
            }
            if(Number(item) + Number(item2) == array2.length || Number(item) - Number(item2) == array2.length){
              if(item != item2 && array.includes(item2) && array2.includes(item2) && array.includes(item) && array2.includes(item)){
                obtainNumbers.push(item)
              }
            }
            }
          }

          const noDuplicated = obtainNumbers.filter((item, index) => obtainNumbers.indexOf(item) === index);
          
          alert(noDuplicated)
        }
      }

  return (
      <form onSubmit={obtainNumbers} className="container col-6 text-center mt-4 bg-light">
        <div className="pb-2">
            <div className="form-group mt-5 p-3 d-flex">
                <div className="form-group mb-3 col-5 mx-auto">
                    <label>Enter Array1</label>
                    <input type="array" className="form-control" id="array1" required aria-describedby="emailHelp " />
                </div>
                <div className="form-group mb-3 col-5 mx-auto">
                    <label>Enter Array2</label>
                    <input type="array" className="form-control" id="array2" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Data</button>
        </div>
    </form>
  );
}