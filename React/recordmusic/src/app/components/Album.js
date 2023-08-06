import Image from 'next/image'
function Album({Img, Name, Artist}){
    return(
        
        <div className="group relative justify-center content-center flex rounded-lg h-72 w-52 bg-zinc-800
                            hover:rounded-2xl transition-all duration-500 shadow-md">
            <Image
            src={Img}
            width={500}
            height={500}
            alt="Album Cover"
            className='absolute top-4 h-48 w-48 rounded-lg group-hover:rounded-xl transition-all duration-500 '/>
                <h1 className="absolute overflow-ellipsis whitespace-nowrap overflow-hidden bottom-9 left-3 text-lg text-sky-100">{Name}</h1>
                <h1 className="absolute overflow-ellipsis overflow-hidden bottom-5 left-3 text-xs text-sky-100">{Artist}</h1>
            </div>
    );
}

export default Album;