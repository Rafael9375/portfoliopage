'use client'

import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image'
import perfil from '../public/images/perfil.jpg'
import emailIcon from '../public/images/emailIcon.png'
import gitHubIcon from '../public/images/gitHubIcon.png'
import linkedinIcon from '../public/images/linkedinIcon.png'
import TimeLine from '../app/components/TimeLine'
import Link from 'next/link';
import Itens from './components/Itens';
import ProjectsLayout from './components/Projects';

interface ConteudoType {
  Apresentacao: {Linha: string}[] ,
  Esperiencias: {
      description: string,
      title: string,
      sub: string,
      tasks: string[],
      techs: string
  },
  Projetos: {
      titulo: string,
      subtitulo: string,
      descricao: string
  }[]
}

export default function Home() {

  const [idiomaEscolhido, idiomaEscolhidoSetState] = useState('pt')
  const [conteudo, conteudoSetState] = useState(Itens(idiomaEscolhido))
  const [estilo, estiliSetState] = useState('bg-green-500 left-1')
  

  // useLayoutEffect(() => {
  //   //conteudoSetState(Itens(idiomaEscolhido))
  //   console.log('teste useEffectLayout', conteudo)
  // }, [])



  useEffect(() => {
    console.log(idiomaEscolhido, conteudo)

  }, [conteudo])

  const mudandoIdioma = (id: string) => {
    
    conteudoSetState(Itens(id))
    idiomaEscolhidoSetState(id)
    
  }





  return (
    <div className='bg-[#333541] h-full main-container'>
      
      <div className='justify-center items-center flex top-10 mb-5 relative text-white'>
        <div>PT</div>
        <div className='bg-[#272831]  text-black rounded-full text-center hover:cursor-pointer h-5 w-10 ml-2 mr-2' onClick={() => {mudandoIdioma(idiomaEscolhido == 'pt'?'en':'pt')}}>
          <div className={`text-black transition-all duration-250 rounded-full text-center hover:cursor-pointer h-4 w-4 top-[2px] relative ${idiomaEscolhido == 'pt'?'left-1 bg-green-500':'left-5 bg-red-500'}`}></div>
        </div>
        <div>EN</div>
      </div>


      <div className='md:flex justify-center items-center pt-10 md:pt-40 w-full '>
        <div className=' grid justify-items-center'><Image className=' justify-center items-center rounded-full h-72 w-72 md:h-52 md:w-52' src={perfil} alt={''}></Image></div>
        <div className='rounded-lg h-[350px] md:h-[300px] p-6 bg-[#272831] m-5'>
          <div className='text-white md:text-6xl text-2xl  text-center'>Rafael de Paula</div>
          <div className='text-[#b8b8b8] text-lg top-5 relative'>
            {conteudo.Apresentacao.map((ap, _index) => 
              (<div key={_index}>{ap.Linha}</div>)
            )}
            <div className='relative top-8 flex justify-center'>
              <div className='w-12 h-12 ml-2 mr-2 opacity-65 hover:opacity-100 duration-200 hover:cursor-pointer'>
                <Link href={'https://www.linkedin.com/in/rafael-de-paula-59666513a/'}><Image src={linkedinIcon} alt=''></Image></Link>
              </div>
              <div className='w-12 h-12 ml-2 mr-2 opacity-65 hover:opacity-100 duration-200 hover:cursor-pointer relative top-1'>
                <Link href={'https://github.com/Rafael9375'}><Image src={gitHubIcon} alt=''></Image></Link>
              </div>
              <div className='w-12 h-12 ml-2 mr-2 opacity-65 hover:opacity-100 duration-200 hover:cursor-pointer relative top-3'>
                <Link href={'mailto: rafael.anexo@gmail.com'}><Image src={emailIcon} alt=''></Image></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full grid justify-items-center relative'>
        <TimeLine item={conteudo.Esperiencias} />
      </div>

      <div className='h-[700px] w-full  grid justify-items-center relative'>
        {conteudo.Projetos.map((pro, ind) => (
          <ProjectsLayout {...pro}></ProjectsLayout>
        ))}
      </div>
      <div className='h-10 relative'></div>

    </div>
  )
}
