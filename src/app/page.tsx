import Link from "next/link";

export default async function Home() {
  return (
    <div className="containerhome">
      <div className="divwelcome">
        <h3>Welcome to Drive</h3>
        <h5>Suggested</h5>
        <h6>Files | Folders</h6>
        <h2><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H13C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0H1ZM0 6C0 5.44772 0.447715 5 1 5H13C13.5523 5 14 5.44772 14 6C14 6.55228 13.5523 7 13 7H1C0.447715 7 0 6.55228 0 6ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H1Z" fill="currentColor"></path></svg> | <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H5C5.55228 0 6 0.447715 6 1V5C6 5.55228 5.55228 6 5 6H1C0.447715 6 0 5.55228 0 5V1ZM2 2H4V4H2V2ZM0 9C0 8.44772 0.447715 8 1 8H5C5.55228 8 6 8.44772 6 9V13C6 13.5523 5.55228 14 5 14H1C0.447715 14 0 13.5523 0 13V9ZM2 10H4V12H2V10ZM9 0C8.44772 0 8 0.447715 8 1V5C8 5.55228 8.44772 6 9 6H13C13.5523 6 14 5.55228 14 5V1C14 0.447715 13.5523 0 13 0H9ZM12 2H10V4H12V2ZM8 9C8 8.44772 8.44772 8 9 8H13C13.5523 8 14 8.44772 14 9V13C14 13.5523 13.5523 14 13 14H9C8.44772 14 8 13.5523 8 13V9ZM10 10H12V12H10V10Z" fill="currentColor"></path></svg></h2>
      </div>
      <nav>
        <Link href="/sign-in">
        <img className="vide" src="icon20.png" srcset="//ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png 2x ,//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png 1x" alt="" aria-hidden="true" role="presentation"></img>
        </Link>

       
          <p className="opne1">Drive</p>
       
        <Link href="/sign-in">
          <p className="opne"><svg className="iconsssss7" focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg><span className="span1"> Search in Drive </span><svg className="iconsssss6" focusable="false"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg></p>
        </Link>
        <Link href="/sign-in">
        <svg viewBox="0 0 24 24" width="24px" height="32px" className="iconsssss5" focusable="false" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><path d="M7 15h10v2H7zm3.3-3.8L8.4 9.3 7 10.7l3.3 3.3L17 7.3l-1.4-1.4z"></path></svg>
        </Link>
        <Link href="/sign-in">
        <svg className="iconsssss4" xmlns="http://www.w3.org/2000/svg" width="24px" height="32px" viewBox="0 0 24 24" fill="#000000" focusable="false"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg>
        </Link>
        <Link href="/sign-in">
        <svg className="iconsssss3" width="32px"  viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>
        </Link>
        <Link href="/sign-in">
        <svg className="iconsssss2" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" fill="#000000"/>
<path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#000000"/>
<path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" fill="#000000"/>
<path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"/>
<path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#000000"/>
<path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="#000000"/>
<path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#000000"/>
<path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" fill="#000000"/>
</svg>
        </Link>
        <Link href="/sign-in">
        <img className="iconsssss1" src="icon21.svg" alt="User SVG File" title="User SVG File" ></img>
        </Link>
      </nav>

      <nav className="navlast">
      <Link className="link1" href="/sign-in">
      <h6 className="new1">

        <li><svg  width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg><p>New</p></li>
      
       </h6>

       <ul className="hhh">
        <li><svg  height="24" width="24" viewBox="0 0 24 24" fill="#000000" focusable="false"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path></svg><p>Home</p></li>
       </ul>
      
       <ul>
        <li><svg className=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><path d="M9.05 15H15q.275 0 .5-.137.225-.138.35-.363l1.1-1.9q.125-.225.1-.5-.025-.275-.15-.5l-2.95-5.1q-.125-.225-.35-.363Q13.375 6 13.1 6h-2.2q-.275 0-.5.137-.225.138-.35.363L7.1 11.6q-.125.225-.125.5t.125.5l1.05 1.9q.125.25.375.375T9.05 15Zm1.2-3L12 9l1.75 3ZM3 17V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v13Zm2 5q-.825 0-1.413-.587Q3 20.825 3 20v-1h18v1q0 .825-.587 1.413Q19.825 22 19 22Z"></path></svg><p>My Drive</p></li>
       </ul>
       <ul>
        <li><svg className=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg><p>Computers</p></li>
       </ul>
       <ul>
        <li><svg className=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M15,8c0-1.42-0.5-2.73-1.33-3.76C14.09,4.1,14.53,4,15,4c2.21,0,4,1.79,4,4s-1.79,4-4,4c-0.43,0-0.84-0.09-1.23-0.21 c-0.03-0.01-0.06-0.02-0.1-0.03C14.5,10.73,15,9.42,15,8z M16.66,13.13C18.03,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.42,13.53,16.66,13.13z M9,4c2.21,0,4,1.79,4,4s-1.79,4-4,4s-4-1.79-4-4S6.79,4,9,4z M9,13c2.67,0,8,1.34,8,4v3H1v-3 C1,14.34,6.33,13,9,13z"></path></g></g></svg><p>Shared with me</p></li>
       </ul>
       <ul>
        <li><svg className="c-qd " width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59l3.71,3.71L15.29,16.71z"></path></g></svg><p>Shared with me</p></li>
       </ul>
       <ul>
        <li><svg className=" c-qd" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg><p>Recent</p></li>
       </ul>
       <ul>
        <li><svg className="c-qd " width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M12,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S12.55,17,12,17z M13,13h-2V7h2V13z"></path></g></svg><p>Starred</p></li>
       </ul>
       <ul>
        <li><svg width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false" className=" c-qd"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M15,4V3H9v1H4v2h1v13c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6h1V4H15z M11,17H9V8h2V17z M15,17h-2V8h2V17z"></path></g></svg><p>Trash</p></li>
       </ul>
       <ul>
        <li><svg className="a-s-fa-Ha-pa c-qd a-ml-da-Q-c" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="#6f6f6f"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></svg><p>Storage</p></li>
       </ul>
       </Link>
      </nav>















      <div className="divcars">
        <Link href="/sign-in">
         <div><img  src="v1.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v2.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v3.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v4.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v5.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v6.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v7.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v8.png"></img></div>
        </Link>
        <Link href="/sign-in">
         <div><img  src="v9.png"></img></div>
        </Link>
       
      </div>


      <div className="lastright">
    <h4>
    <Link href="/sign-in">
    <img  src="icon22.svg" alt="Calendar Google Logo New SVG File" title="Calendar Google Logo New SVG File" width="35" height="35"></img>
     </Link>   
    </h4>
    <h4>
    <Link href="/sign-in">
    <img  src="icon23.png" alt="Calendar Google Logo New SVG File" title="Calendar Google Logo New SVG File" width="28" height="28"></img>
   </Link>
    </h4>
    <h4>
    <Link href="/sign-in">
    <img  src="icon24.png" alt="Calendar Google Logo New SVG File" title="Calendar Google Logo New SVG File" width="28" height="28"></img>
    </Link>
    </h4>
    <h4>
    <Link href="/sign-in">
    <img  src="icon25.png" alt="Calendar Google Logo New SVG File" title="Calendar Google Logo New SVG File" width="35" height="35"></img>
    </Link>
    </h4>
    

</div>
    </div>
    
  );
}
