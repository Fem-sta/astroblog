export default function Display({imgPreview, keyName}){
      if (!imgPreview || !imgPreview[keyName]) return null;

      const {src, alt, type} = imgPreview[keyName];
    return(
        <div className="p-4 bg-gray-100 rounded mx-auto">
            {type==="video"?(
                <video src={src} autoPlay
                loop
                muted
                playsinline 
                class="video w-full h-auto object-cover"> </video>
            ):(
                <img
                src={src}
                alt={alt||""}
                className="w-full h-auto object-cover"/>
            )}
        </div>

    )
}