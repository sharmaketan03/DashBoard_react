import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router-dom";
import MainComponent from "./MainComponent";

const Dashboard = () => {
    const [page,setpage]=useState(false)
    const [page2,setpage2]=useState(false)
    const [page3,setpage3]=useState(false)
    const [page4,setpage4]=useState(false)
  return (
    <>
    { (!page && !page2 && !page3 && !page4 ) && (
      <div className="mt-25 w-[96%]">
        <h1 className="text-2xl mt-[4%] font-bold mb-6">Dashboard</h1>
        <div>
          <div className="p-6 bg-white  border border-gray-300 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">My Tickets</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-sky-100 text-[#254a9c] ">
                    <th className="px-4 py-3 font-semibold">Ticket No.</th>
                    <th className="px-4 py-3 font-semibold">Client Name</th>
                    <th className="px-4 py-3 font-semibold">Client Site</th>
                    <th className="px-4 py-3 font-semibold">Asset</th>
                    <th className="px-4 py-3 font-semibold">Job Title</th>
                    <th className="px-4 py-3 font-semibold">Age</th>
                    <th className="px-4 py-3 font-semibold">Technicians</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 ">
                  <tr className="border-t border-gray-300 leading-8" >
                    <td className="px-4 py-3">10005</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3">Testing1</td>
                    <td className="px-4 py-3">Event - 22th Aug</td>
                    <td className="px-4 py-3">252 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      {/* <Link to="/DashboardonsitePageFirst"> */}
                        <button className="bg-[#629C44] w-[125px]   text-white   rounded-md text-8   block text-center" onClick={()=>setpage(!page)}>
                          On-site Technician
                        </button>
                      {/* </Link> */}
                    </td>
                   
                    <td className="px-4 py-3">
                      {/* <Link to="/App/DashboardonsitePageFirst"> */}
                        <button className="p-1 border rounded hover:bg-gray-100" onClick={()=>setpage(!page)}>
                          <LuPencil />
                        </button>
                      {/* </Link> */}
                    </td>
                  </tr>

                  <tr className="border-t  border-gray-300 ">
                    <td className="px-4 py-3">10003</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">261 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                       {/* <Link to="/DashboardOnsiteTechnincSecond"> */}
                        <button className="bg-[#629C44] w-[126px]   text-white  p-1.5  rounded-md text-11   block text-center" onClick={()=>setpage2(!page2)}>
                          On-site Technician
                        </button>
                      {/* </Link> */}
                    </td>
                    <td className="px-4 py-3">
                      {/* <Link to="/App/DashboardOnsiteTechnincSecond"> */}
                        <button className="p-1 border rounded hover:bg-gray-100" onClick={()=>setpage2(!page2)}>
                          <LuPencil />
                        </button>
                      {/* </Link> */}
                    </td>
                  </tr>

                  <tr className="border-t  border-gray-300 h-8">
                    <td className="px-4 py-6">10002</td>
                    <td className="px-4 py-6">Sterling Infotech</td>
                    <td className="px-4 py-6">Client Site</td>
                    <td className="px-4 py-6">test</td>
                    <td className="px-4 py-6">Event - 25th Aug</td>
                    <td className="px-4 py-6">261 Days</td>
                    <td className="px-4 py-6">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="">
                      {/* <Link to="/DashboardWorking"> */}
                        <button className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center" onClick={()=>setpage3(!page3)}>
                          Working
                        </button>
                      {/* </Link> */}
                    </td>
                    <td className="px-4 py-3">
                      {/* <Link to="/App/DashboardWorking"> */}
                        <button className="p-1 border rounded hover:bg-gray-100" onClick={()=>setpage3(!page3)}>
                          <LuPencil />
                        </button>
                      {/* </Link> */}
                    </td>
                  </tr>

                  <tr className="border-t  border-gray-300">
                    <td className="px-4 py-3">10001</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">280 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className=" ">
                      {/* <Link to="/DashboardOpen"> */}
                        <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center" onClick={()=>setpage4(!page4)}>
                          Open
                        </span>
                      {/* </Link> */}
                    </td>
                    <td className="px-4 py-3">
                      {/* <Link to="/DashboardOpen"> */}
                        <button className="p-1 border rounded hover:bg-gray-100" onClick={()=>setpage4(!page4)}>
                          <LuPencil />
                        </button>
                      {/* </Link> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
    
    }
     {
                      page && (
                        <MainComponent  info={{value:"Support Ticket #10005",name:"Paul Cox",number:4683842798,email:"anshu@strelinginfotech.com",link:"Edit Ticket",file:"on-site",bgcolor1:"#e5e7eb",textColor1:"gray",bgcolor2:"#fdc700",textColor2:"#fff",bgcolor3:"#e5e7eb",textColor3:"gray",bgcolor4:"#e5e7eb",textColor4:"gray",bgcolor5:"#fdc700",textColor5:"#fff",bgcolor6:"#fdc700",textColor6:"#fff",bgcolor7:"#fdc700",textColor7:"#fff",bgcolor8:"#fdc700",textColor8:"#fff"}}
                        onback={()=>setpage(false)}   />
                      )
                    }

     {
      page2 && (
           <MainComponent  info={{value:"Support Ticket #10003",name:"Paul Jose", number:61402872296,email:"info@Streling.com",link:"",file:"on-site",bgcolor1:"#e5e7eb",textColor1:"gray",bgcolor2:"#fdc700",textColor2:"#fff",bgcolor3:"#e5e7eb",textColor3:"gray",bgcolor4:"#e5e7eb",textColor4:"gray",bgcolor5:"#fdc700",textColor5:"#fff",bgcolor6:"#fdc700",textColor6:"#fff",bgcolor7:"#fdc700",textColor7:"#fff",bgcolor8:"#fdc700",textColor8:"#fff"}}
            onback={()=>setpage2(false)}/>
      )
     } 

      {
      page3 && (
           <MainComponent  info={{value:"Support Ticket #10002",name:"Paul Jose", number:61402872296,email:"info@Streling.com",link:'',className:"absolute left-[545px] text-gray-400 text-5xl",file:"Working",className2:"absolute left-[738px] text-amber-600 text-5xl",bgcolor1:"green",textColor1:"#fff",bgcolor2:"#e5e7eb",textColor2:"gray",bgcolor3:"#e5e7eb",textColor3:"gray",bgcolor4:"#e5e7eb",textColor4:"gray",bgcolor5:"#e5e7eb",textColor5:"gray",bgcolor6:"#fdc700",textColor6:"#fff",bgcolor7:"green",textColor7:"#fff",bgcolor8:"#fdc700",textColor8:"#fff",}}
             onback={()=>setpage3(false)}/>
      )
     } 


     {
      page4 && (
           <MainComponent  info={{value:"Support Ticket #10008",name:"Paul Jose", number:5558888,email:"info@Streling.com",link:'Edit Ticket',className:"absolute left-[545px] text-gray-400 text-5xl",file:"open",className2:"absolute left-[738px] text-amber-600 text-5xl",bgcolor1:"#e5e7eb",textColor1:"#fff",bgcolor2:"#e5e7eb",textColor2:"#fff",bgcolor3:"#e5e7eb",textColor3:"#fff",bgcolor4:"#e5e7eb",textColor4:"#fff",bgcolor5:"#e5e7eb",textColor5:"#fff",bgcolor6:"#ff0000",textColor6:"#fff  ",bgcolor7:"green",textColor7:"#fff",bgcolor8:"#fdc700",textColor8:"#fff",}}
              onback={()=>setpage4(false)}/>
      )
     } 
    
      
    </>
  );
};

export default Dashboard;
