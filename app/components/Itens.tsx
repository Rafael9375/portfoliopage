interface Item {
    data?: string
    description?: string
    title?: string
    sub?: string
    tasks?: string[]
    techs?: string
}

interface Projeto {
    titulo: string,
    subtitulo: string,
    descricao: string,
    youTube: string
}

interface ConteudoType {
    Apresentacao: {Linha: string}[] ,
    Esperiencias: Item[],
    Projetos: Projeto[]
}

export default function Itens(language: string) {
    let conteudo= {} as  ConteudoType
    conteudo.Projetos = []

    let items = [] as any
    
    switch (language) {
        case "pt": {
            items = [
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
            conteudo.Esperiencias = items
            let apresentacao = [
                { Linha: 'Analista Desenvolvedor Fullstack'}
                , { Linha: '.NET - Next JS - JavaScript - SQL Server' }
                , { Linha: 'Buscando por oportunidades freelancer' }
            ]

            conteudo.Apresentacao = apresentacao
            
            let projeto = { 
                titulo: 'Clone do Netflix'
                , subtitulo: 'React - Next JS - Node - Tailwind'
                , descricao: 'Projeto desenvolvido para fins de estudo, sendo um clone do site Netflix com as principais páginas de navegação.'
                , youTube: 'https://www.youtube.com/embed/mfD01qS9TRc?si=ByKCEiTXuhBvopDb' 
            }

            conteudo.Projetos.push(projeto)

            break;
        }
        case "en": {
            items = [
                {
                    description:
                        'Company that outsources programming services that are allocated to customers according to demand.'
                    , data: '10/2020 - Currently...'
                    , title: 'Rerum Engenharia de Sistemas LTDA'
                    , sub: 'Web Developer Full Stack'
                    , tasks:
                        [
                            'Technical developer of new features for the system, involving changes to the front-end, back-end and database;'
                            , 'Bug fixes detected by the operations team;'
                            , 'Participation in daily sessions to monitor/position the progress of demand in the sprint;'
                            , 'Source code versioning control through GitHub/Azure;'
                            , 'Scope analysis for surveying effort (service time) to develop a specific demand'
                        ]
                    , techs: 'C#; .NET; SQL Server; GitHub; Azure; Angular; HTML; CSS; Javascript.'
                }
                , {
                    description:
                        'Company that offers a management system aimed at occupational medicine clinics.'
                    , data: '03/2019 - 10/2020'
                    , title: 'MSITT (Medical Solution IT)'
                    , sub: 'Web Developer Full Stack'
                    , tasks:
                        [
                            'Technical developer of new features for the system, involving changes to the front-end, back-end and database;'
                            , 'Migration of the legacy system source to a new language;'
                            , 'Source code versioning control through GitHub/Azure;'
                            , "Development of APIs that integrate with third-party systems."
                        ]
                    , techs: 'C#; .NET; SQL Server; Azure; JQuery; HTML; CSS; Javascript; ASP Web; Swagger'
                }
                , {
                    description:
                        'Real estate portal part of the Grupo ZAP, which offers a platform for brokers and construction companies, helping to promote used properties and launches.'
                    , data: '05/2015 - 01/2018'
                    , title: 'VivaReal'
                    , sub: 'Support analyst'
                    , tasks:
                        [
                            'Analysis of non-conformities arising from integration between portals;'
                            , 'Unit tests to validate bugs and XMLs that establish integration updates;'
                            , 'Participation in meetings with the team of Engineers to highlight critical situations in the portal, with a greater impact on user usability;'
                            , "Collection of reports extracted from the database, according to on-demand requests."
                        ]
                    , techs: 'SQL Server; XML'
                }
            ]
            conteudo.Esperiencias = items
            

            let apresentacao = [
                { Linha: 'Web Developer Fullstack'}
                , { Linha: '.NET - Next JS - JavaScript - SQL Server' }
                , { Linha: 'Looking for freelance opportunities' }
            ]

            conteudo.Apresentacao = apresentacao

            let projeto = { 
                titulo: 'Netflix Clone'
                , subtitulo: 'React - Next JS - Node - Tailwind'
                , descricao: 'Project developed for study purposes, being a clone of the Netflix website with the main navigation pages.' 
                , youTube: 'https://www.youtube.com/embed/mfD01qS9TRc?si=ByKCEiTXuhBvopDb' 
            }

            conteudo.Projetos.push(projeto)
            break;
        }
    }


    return conteudo

}