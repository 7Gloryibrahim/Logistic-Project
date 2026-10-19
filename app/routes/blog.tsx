
export default function Blog(){
    return(
        <div>
            <div className="flex justify-center flex-col lg:flex lg:flex-row">
                <div className="relative">
                    <div className="blog-img">
                        <img src="ocean.jpg" className="w-[30em] h-[20em]  rounded-br-full"/>
                    </div>
                    <div className="blog-text absolute ">
                        <h1>How will you know when success show up?</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}