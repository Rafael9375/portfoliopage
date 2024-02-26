'use client'

import React from 'react';
import Image from 'next/image'
import perfil from '../public/images/perfil.jpg'
import emailIcon from '../public/images/emailIcon.png'
import gitHubIcon from '../public/images/gitHubIcon.png'
import linkedinIcon from '../public/images/linkedinIcon.png'
import TimeLine from '../app/components/TimeLine'
import Link from 'next/link';


export default function Home() {

  const items = [
    {
      description:
        'Empresa que terceriza serviços de programadores que ficam alocados em clientes conforme a demanda. '
      , data: '10/2020 - Atual...'
      , title: 'Rerum Engenharia de Sistemas LTDA'
      , sub: 'Analista Desenvolvedor Full Stack'
      , tasks:
        [
          'Desenlvolvedor técnico de novas funcionalidades/features para o sistema, envolvendo alterações no front-end, no back-end e na base de dados; '
          , 'Ajuste de bugs detectados pelo time de operações; '
          , 'Participação das dailys para o acompanhamento/posicionamento sobre o andamento da demanda na sprint; '
          , 'Controle de versionamento do código fonte através do GitHub/Azure; '
          , 'Análise de escopo para o levantamento de esforço (tempo de serviço) para o desenvolvimento de uma demanda determinada'
        ]
      , techs: 'C#; .NET; SQL Server; GitHub; Azure; Angular; HTML; CSS; Javascript.'
    }
    , {
      description:
        'Empresa que oferece um sistema de gestão voltado para clínicas de medicina ocupacional. '
      , data: '03/2019 - 10/2020'
      , title: 'MSITT (Medical Solution IT)'
      , sub: 'Analista Desenvolvedor Full Stack'
      , tasks:
        [
          'Desenvolvedor técnico de novas funcionalidades/features para o sistema, envolvendo alterações no front-end, no back-end e na base de dados; '
          , 'Migração do fonte do sistema legado para uma nova linguagem; '
          , 'Controle de versionamento do código fonte através do Azure; '
          , "Desenvolvimento de API's que fazem integração com sistemas terceiros."
        ]
      , techs: 'C#; .NET; SQL Server; Azure; JQuery; HTML; CSS; Javascript; ASP Web; Swagger'
    }
    , {
      description:
        'Portal imobiliário que faz parte do Grupo ZAP, que oferece uma plataforma para corretores e construtoras, auxiliando na divulgação de imóveis usados e lançamentos.'
      , data: '05/2015 - 01/2018'
      , title: 'VivaReal'
      , sub: 'Analista de Suporte'
      , tasks:
        [
          'Análise de inconformidades resultantes da integração entre portais; '
          , 'Testes unitários para validar bugs e XMLs que estabelecem as atualizações das integrações; '
          , 'Participação de reuniões com o time de Engenheiros para o apontamento das situações críticas do portal, com maior impacto na usabilidade dos usuários; '
          , "Levantamento de relatórios extraídos da base, conforme as solicitações por demanda."
        ]
      , techs: 'SQL Server; XML'
    }
  ]

  return (
    <div className='bg-[#333541] h-full main-container'>

      <div className='md:flex justify-center items-center pt-10 md:pt-40 w-full'>
        <div className=' grid justify-items-center'><Image className=' justify-center items-center rounded-full h-72 w-72 md:h-52 md:w-52' src={perfil} alt={''}></Image></div>
        <div className='rounded-lg h-[350px] md:h-[300px] p-6 bg-[#272831] m-5'>
          <div className='text-white md:text-6xl text-2xl  text-center'>Rafael de Paula</div>
          <div className='text-[#b8b8b8] text-lg top-5 relative'>
            <div>Analista Desenvolvedor Fullstack</div>
            <div>.NET - Next JS - JavaScript - SQL Server</div>
            <div>Buscando por oportunidades freelancer</div>
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

      <div className='w-full grid justify-items-center '>
        <TimeLine item={items} />

      </div>
      <div className='h-[700px] w-full  grid justify-items-center'>
        <div className='h-[620px] md:w-[700px] rounded-lg justify-items-center bg-[#272831] pt-10 pl-10 pr-10 ml-5 mr-5 '>

          <div className='w-full text-2xl text-white relative'>Clone do Netflix</div>
          <div className='w-full text-[#26c226] relative underline'>React - Next JS - Node - Tailwind</div>
          <div className='w-full text-[#b8b8b8] h-24 relative top-10'>
            Projeto desenvolvido para fins de estudo, sendo um clone do site Netflix com as principais páginas de navegação.
          </div>
          <div className='md:w-full md:hidden flex justify-center top-14 relative h-[10] w-[10]'>
            <iframe className='relative rounded-xl' width="300" height="315" src="https://www.youtube.com/embed/mfD01qS9TRc?si=ByKCEiTXuhBvopDb" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

            </iframe>
          </div>
          <div className='max-[767px]:hidden md:w-full flex justify-center top-5 relative h-[10] w-[10]'>
            <iframe className='relative rounded-xl' width="500" height="315" src="https://www.youtube.com/embed/mfD01qS9TRc?si=ByKCEiTXuhBvopDb" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

            </iframe>
          </div>
          
        </div>

      </div>
      <div className='h-10 relative'></div>

    </div>
  )
}
