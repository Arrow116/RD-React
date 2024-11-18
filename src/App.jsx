import Home from "./Components/home"
import VideoPlayer from "./Components/videoplayer"
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import PTZ from "./pages/PTZ";


// var Id ="1a09c074-48e2-a040-6702-90a531509525"
// var Id = "32e1cd7f-ad58-6f91-c00a-7fdfd5055841"
var Id = "52432602-49dd-add2-e448-29a99339e455"
let streamingUrl = `https://sitesecuritysystems.net:7001/hls/${Id}.m3u?auth=ZGFyc2huYS52QGluYXBwLmNvbTpydGZaaXB3ODl2ZXpBWEt1VXlCS1VldVp3eE0yMGc9aHpocWpnOjU0MmQ5YTkxMDY4NTRhNTg0MWRmZGMzMDUzODg5ZjAy`;
// const botanicUrl = "https://sitesecuritysystems.net:7001/hls/32e1cd7f-ad58-6f91-c00a-7fdfd5055841.m3u8?auth=ZGFyc2huYS52QGluYXBwLmNvbTpydGZaaXB3ODl2ZXpBWEt1VXlCS1VldVp3eE0yMGc9aHpoamxmOmMwNjI3MTc4MTYzNjg4ZWU1ZTRjNDc2ZDA1MjlmZTJh"
// const outsideGarage = "https://sitesecuritysystems.net:7001/hls/52432602-49dd-add2-e448-29a99339e455.m3u?auth=ZGFyc2huYS52QGluYXBwLmNvbTpydGZaaXB3ODl2ZXpBWEt1VXlCS1VldVp3eE0yMGc9aHpkcm5wOjI1YmE4ZDc1YmI2YzEyNTdiY2RhYWNhMWU0OThhNDlk"
const pos="2024-11-06T20:44:33.824"
streamingUrl = `${streamingUrl}&pos=${pos}`
console.log(streamingUrl);



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/video-stream",
    element: <VideoPlayer videoUrl={streamingUrl} token={"vms-711d2b593dd024a4e44d30f081174adf-FgvHY3Re9b"}/>
  },
  {
    path: "/ptz",
    element: <PTZ />
  }
])


function App() {
  // return <Home />
  return <RouterProvider router={router} />
}

export default App
