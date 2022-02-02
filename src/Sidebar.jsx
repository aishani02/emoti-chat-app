import Logout from "./Logout";
import {ReactComponent as ChatIcon} from "./assets/svg/chatIcon.svg";

import {ReactComponent as HomeIcon} from "./assets/svg/homeIcon.svg";

import {ReactComponent as FavouriteIcon} from "./assets/svg/favouriteIcon.svg";

import {ReactComponent as ContactsIcon} from "./assets/svg/contactsIcon.svg";



import {ReactComponent as HelpIcon} from "./assets/svg/helpIcon.svg";

function Sidebar(){



    return( <>

    
  <div className="sidebar shadow-lg py-3 px-2   bg-[#258C60]">

<div className="mt-4 ">
     {/* Chat Icon */}
   <ChatIcon />  

</div>



    <div className="flex flex-col">



        <button className="btn btn-square btn-ghost">
            <HomeIcon />
           </button>
        

        <button className="btn btn-square btn-ghost">
           <FavouriteIcon />
          </button>
    
    
          <button className=" btn btn-square btn-ghost">
           
        
            <ContactsIcon />
        </button>
        
       

    </div>






    <div className="flex flex-col">

     
        <button className=" btn btn-square btn-ghost">
           
            <HelpIcon />
        
           </button>
        
    
        <Logout />

    </div>
   
     
    

   </div>



    </>

    )

}


export default Sidebar;