import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Header from "./Components/Header"


function App() {


  return (
    <>
      <img src="https://plantsguru.com/cdn/shop/files/Rose_Baby_Pink.jpg?v=1758804477" alt="Rose" width={300}  /> <br />

      <audio src="/audio.mp3" controls></audio> <br />
      <video src="/video.mp4" controls width={300}></video> <br />
      <Header/>
      <Content/>
      <Footer/>
         
    </>
  )
}

export default App
