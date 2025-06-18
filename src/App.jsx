
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactComponent from './ContactComponent'
import First from "./First"
import AssestComponent from "./AssetsComponent"
import Dashboard from './Dashboard'
import Resoursec from './Resoursec'
import Archive from './Archive'
import Setting from './Setting'
import Support from './Support'
import Technicians from './Technicians'
import Jobcard from './Jobcard'
import Clients from './Clients'
import Users from './Users'
import SupportTicket from './SupportTicket'

import DashboardWorking from "./DashboardWorking"
import DashboardOpen from "./OpenFileDashboard"
import ToInvoice from "./ToInvoice"
import DashboardOnsiteTechnincFirst from "./OnSitePagefirst"
import DashboardonsitePageSecond from "./OnsitePageSecond"
import JobCard from "./JobCardsNextComponent"
import JobCardNext from "./JobCardsNextComponent"
import SiteOverview from "./Ster"
import StrelingInfotech from "./StrelingInfotech"
import Clientstest from "./ClientTest"
import JobClientAdd from "./JobClientAdd"
import Google from "./Google"
import AssetDetails1 from "./AssetDetails1"
import AssetsCPUComponent from "./AssetsCPUComponent"
import SupportTicketNext from "./SupportsTicketsnext"


const router = createBrowserRouter([
  {
    path:"/",
    element:<First/>,
    children:[
      {
     index:true,
     element:<Dashboard/>
      },
      {
     path:"/contact",
     element:<ContactComponent/>
      },
      {
     path:"/assets",
     element:<AssestComponent/>
      },
      {
     path:"/resoursec",
     element:<Resoursec/>
      },
      {
     path:"/setting",
     element:<Setting/>
      },
      {
     path:"/support",
     element:<Support/>
      },
      {
     path:"/archive",
     element:<Archive/>
      },
      {
     path:"/jobcard",
     element:<Jobcard/>
      },
      {
     path:"/Technicians",
     element:<Technicians/>
      },
       {
     path:"/ToInvoice",
     element:<ToInvoice/>
      },
      {
     path:"/clients",
     element:<Clients/>
      },
      {
     path:"/users",
     element:<Users/>
      },
      {
      path:"/supportTicket",
      element:<SupportTicket/>
      },
      {
      path:"/DashboardWorking",
      element:<DashboardWorking/>
      },
        {
      path:"/DashboardOpen",
      element:<DashboardOpen/>
      },

        {
      path:"/DashboardOnsiteTechnincSecond",
      element:<DashboardOnsiteTechnincFirst/>
      },

        {
      path:"/DashboardonsitePageFirst",
      element:<DashboardonsitePageSecond/>
      },
         {
      path:"/JobCardNext",
      element:<JobCardNext/>
      },
      
          {
      path:"/SiteOverview",
      element:<SiteOverview/>
      },

          {
      path:"/StrelingInfotech",
      element:<StrelingInfotech/>
      },
          {
      path:"/Clientstest",
      element:<Clientstest/>
      },
           {
      path:"/JobClientAdd",
      element:<JobClientAdd/>
      },
            {
      path:"/Google",
      element:<Google/>
      },
             {
      path:"/AssetDetails1",
      element:<AssetDetails1/>
      },

               {
      path:"/AssetsCPUComponent",
      element:<AssetsCPUComponent/>
      },
                 {
      path:"/SupportTicketNext",
      element:<SupportTicketNext/>
      },
      
    ]
  }
])



function App() {

  return (
    <>

     <RouterProvider router={router}/>


    </>
  );
}

export default App
