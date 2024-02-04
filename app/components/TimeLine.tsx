import angularIcon from '../../public/images/angularIcon.png'
import csharpIcon from '../../public/images/csharpIcon.png'
import cssIcon from '../../public/images/cssIcon.png'
import dotNetIcon from '../../public/images/dotNetIcon.png'
import htmlIcon from '../../public/images/htmlIcon.png'
import javascriptIcon from '../../public/images/javascriptIcon.png'
import nodeIcon from '../../public/images/nodeIcon.png'
import reactIcon from '../../public/images/reactIcon.png'
import sqlIcon from '../../public/images/sqlIcon.png'




interface Item {
    data?: string
    description?: string
    title?: string
    sub?: string
    tasks?: string[]
    techs?: string
}

interface Items {
    item: Item[]

}

export default function TimeLine({ item }: Items) {

    return (

        <div className="pt-[60px] relative -left-5">
            {item.length > 0 ? (item.map((it, _index) =>

                <div key={_index.toString()}>
                    <div>

                        {_index != item.length - 1 ?
                            <div className="border-l-2  border-green-500">
                                <div className=' w-[350px] md:w-[700px] h-full'>
                                    <div className="h-1"></div>
                                    <div className='bg-[#272831] pl-5 pr-5 pb-5 pt-2 -top-[75px] left-6 relative text-[#b8b8b8] rounded-lg mt-10'>
                                        <div className='bg-white rounded-full w-3 h-3 relative -left-[51px] top-5'>
                                        </div>
                                        <div className="min-[1140px]:-left-[218px] min-[1140px]:absolute top-[18px]">
                                            <div className="text-sm bg-[#c9c9c9] border-2 border-[#c9c9c9] rounded-md pl-3 pr-3 min-[1140px]:top-[3.4px] -top-2 min-[1140px]:-left-2 -left-1.5 relative text-[#000000] w-44 h-[23px]">{it.data}</div>
                                            <span className=" text-[#c9c9c9] invisible min-[1140px]:visible text-3xl absolute left-[161px] -top-[4px]">▶</span>
                                        </div>
                                        {/* <span className="left-[5px] absolute text-[#c9c9c9] text-2xl top-[16px]">◀</span><span className="bg-[#c9c9c9] rounded-md pl-3 pr-3">{it.data}</span> */}
                                        <div className="text-white font-medium">{it.title}</div>
                                        <div className="underline text-[#26c226]">{it.sub}</div>
                                        <div className="mt-2">{it.description}</div>
                                        <div className="mt-2">Atividades:</div>
                                        <ul className='list-disc relative left-5'>
                                        {it.tasks?.length != null? (it.tasks?.map((task, index) => <li key={index.toString()}>{task}</li>)) : <></>}
                                        </ul>
                                        <div className="mt-2">Tecnologias: {it.techs}</div>

                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <div className=" ">
                                    <div className=' w-[350px] md:w-[700px] h-full'>
                                        <div className="h-1"></div>
                                        <div className='bg-[#272831] pl-5 pr-5 pb-5 pt-2 -top-[75px] left-6 relative text-[#b8b8b8] rounded-lg mt-10'>
                                            <div className='bg-white rounded-full w-3 h-3 relative -left-[49px] top-5'>
                                            </div>
                                            <div className="min-[1140px]:-left-[218px] min-[1140px]:absolute top-[18px]">
                                            <div className="text-sm bg-[#c9c9c9] border-2 border-[#c9c9c9] rounded-md pl-3 pr-3 min-[1140px]:top-[3.4px] -top-2 min-[1140px]:-left-2 -left-1.5 relative text-[#000000] w-44 h-[23px]">{it.data}</div>
                                            <span className=" text-[#c9c9c9] invisible min-[1140px]:visible text-3xl absolute left-[161px] -top-[4px]">▶</span>
                                        </div>
                                        {/* <span className="left-[5px] absolute text-[#c9c9c9] text-2xl top-[16px]">◀</span><span className="bg-[#c9c9c9] rounded-md pl-3 pr-3">{it.data}</span> */}
                                        <div className="text-white font-medium">{it.title}</div>
                                        <div className="underline text-[#26c226]">{it.sub}</div>
                                        <div className="mt-2">{it.description}</div>
                                        <div className="mt-2">Atividades:</div>
                                        <ul className='list-disc relative left-5'>
                                        {it.tasks?.length != null? (it.tasks?.map((task, index) => <li key={index.toString()}>{task}</li>)) : <></>}
                                        </ul>
                                        <div className="mt-2">Tecnologias: {it.techs}</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            )) : <></>}
        </div>
    )
}