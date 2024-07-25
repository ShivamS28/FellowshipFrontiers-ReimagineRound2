const Loader = () => {
  return (
    <div className="fixed top-0 bg-black left-0 h-full w-[100vw] object-cover z-50">
        <video className="h-screen w-[100vw]" autoPlay loop muted src="./src/assets/something.mp4"></video>
    </div>
  )
}

export default Loader