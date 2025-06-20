
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
import Login from "./Login"
import Register from "./Register"
import ProtecterRouter from "./ProtecterRouter"
// import MainComponent from "./MainComponent"

const router = createBrowserRouter([
  {  
    path:"/",
    element:<Login/>

  },
  {
    path:"/register",
    element:<Register/>
  },
 
 
 
  {
    path:"/App",
    element: <ProtecterRouter> 
      <First/>
    </ProtecterRouter>,
    children:[
      {
     index:true,
     element:<Dashboard/>
      },
      {
     path:"/App/contact", 
     element:<ContactComponent/>
      },
      {
     path:"/App/assets",
     element:<AssestComponent/>
      },
      {
     path:"/App/resoursec",
     element:<Resoursec/>
      },
      {
     path:"/App/setting",
     element:<Setting/>
      },
      {
     path:"/App/support",
     element:<Support/>
      },
      {
     path:"/App/archive",
     element:<Archive/>
      },
      {
     path:"/App/jobcard",
     element:<Jobcard/>
      },
      {
     path:"/App/Technicians",
     element:<Technicians/>
      },
       {
     path:"/App/ToInvoice",
     element:<ToInvoice/>
      },
      {
     path:"/App/clients",
     element:<Clients/>
      },
      {
     path:"/App/users",
     element:<Users/>
      },
      {
      path:"/App/supportTicket",
      element:<SupportTicket/>
      },
      {
      path:"/App/DashboardWorking",
      element:<DashboardWorking/>
      },
        {
      path:"/App/DashboardOpen",
      element:<DashboardOpen/>
      },

        {
      path:"/App/DashboardOnsiteTechnincSecond",
      element:<DashboardOnsiteTechnincFirst/>
      },

        {
      path:"/App/DashboardonsitePageFirst",
      element:<DashboardonsitePageSecond/>
      },
         {
      path:"/App/JobCardNext",
      element:<JobCardNext/>
      },
      
          {
      path:"/App/SiteOverview",
      element:<SiteOverview/>
      },

          {
      path:"/App/StrelingInfotech",
      element:<StrelingInfotech/>
      },
          {
      path:"/App/Clientstest",
      element:<Clientstest/>
      },
           {
      path:"/App/JobClientAdd",
      element:<JobClientAdd/>
      },
            {
      path:"/App/Google",
      element:<Google/>
      },
             {
      path:"/App/AssetDetails1",
      element:<AssetDetails1/>
      },

               {
      path:"/App/AssetsCPUComponent",
      element:<AssetsCPUComponent/>
      },
                 {
      path:"/App/ SupportTicketNext",
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
