interface Projeto {
    titulo: string,
    subtitulo: string,
    descricao: string,
    youTube: string
}

export default function ProjectsLayout({titulo, subtitulo, descricao, youTube}: Projeto) {
    return (

        <div className='h-[620px] md:w-[700px] rounded-lg justify-items-center bg-[#272831] pt-10 pl-10 pr-10 ml-5 mr-5 '>

            <div className='w-full text-2xl text-white relative'>{titulo}</div>
            <div className='w-full text-[#26c226] relative underline'>{subtitulo}</div>
            <div className='w-full text-[#b8b8b8] h-24 relative top-10'>
                {descricao}
            </div>

            <div className='md:w-full md:hidden flex justify-center top-14 relative h-[10] w-[10]'>
                <iframe className='relative rounded-xl' width="300" height="315" src={youTube} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

                </iframe>
            </div>
            <div className='max-[767px]:hidden md:w-full flex justify-center top-5 relative h-[10] w-[10]'>
                <iframe className='relative rounded-xl' width="500" height="315" src={youTube} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

                </iframe>
            </div>

        </div>


    )
}