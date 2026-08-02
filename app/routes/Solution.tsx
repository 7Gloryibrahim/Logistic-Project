

export default function Solution(){
    return(
        <div>
           <section  className="relative mt-7 ">
            <video
            autoPlay
            muted
            playsInline
            loop
           className="h-80 w-full object-cover"
            >
                <source src="/LogisticVideo.mp4" type="video/mp4" className="absolute "/>
                </video>
                <div className="absolute z-10 bg-black/55 inset-0 object-cover"></div>
    </section>
        </div>
    )
}