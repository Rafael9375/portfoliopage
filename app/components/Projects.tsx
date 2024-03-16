interface Projeto {
    titulo: string,
    subtitulo: string,
    descricao: string,
    youTube: string
}

interface Projetos {
    projetos: Projeto[]
}


export default function ProjectsLayout({projetos}: Projetos) {
   
    return (
        

        <div className='h-[700px] w-full  grid justify-items-center relative'>
            {projetos.map((pro, ind) => (
                
                <div key={ind} className='h-[620px] md:w-[700px] rounded-lg justify-items-center bg-[#272831] pt-10 pl-10 pr-10 ml-5 mr-5 '>

                    <div className='w-full text-2xl text-white relative'>{pro.titulo}</div>
                    <div className='w-full text-[#26c226] relative underline'>{pro.subtitulo}</div>
                    <div className='w-full text-[#b8b8b8] h-24 relative top-10'>
                        {pro.descricao}
                    </div>

                    <div className='md:w-full md:hidden flex justify-center top-14 relative h-[10] w-[10]'>
                        <iframe className='relative rounded-xl' width="300" height="315" src={pro.youTube} title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

                        </iframe>
                    </div>
                    <div className='max-[767px]:hidden md:w-full flex justify-center top-5 relative h-[10] w-[10]'>
                        <iframe className='relative rounded-xl' width="500" height="315" src={pro.youTube} title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

                        </iframe>
                    </div>

                </div>
            ))}



        </div>



    )
}