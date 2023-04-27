import { useStateValue } from "./StateProvider";
import UseGoogleSearch from "./UseGoogleSearch";
import "./SearchPage.css"
export function Images() {
   
const[{term},dispatch]=useStateValue();

//live api call
const {data}=UseGoogleSearch(term);
//mock api call
// const data = Response;

console.log(data)
   return (
      <div>
             {term && (
             <div>
                

                {data?.items.map(item =>(
                  <div className="image_size">
                   
                        {item.pagemap?.cse_image?.length > 0 && (
                           <img
                           className="perimage_size"
                           src={
                              item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                           }
                           alt=""
                           
                           />
                        )}
                 
                    

                     
                  </div>
                ))}

            </div>
         )}
      </div>
   );
}
