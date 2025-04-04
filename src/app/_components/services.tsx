"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
    {
        title: "Banho & Tosa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat eveniet laborum aliquam blanditiis cum amet recusandae sequi? At, rerum dicta ea nam perferendis molestiae repellat illum placeat vitae iure?",
        duration: "1h",
        price: "$50",
        icon: <Scissors/>,
        linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações"
    },
    {
        title: "Consulta Veterinaria",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat eveniet laborum aliquam blanditiis cum amet recusandae sequi? At, rerum dicta ea nam perferendis molestiae repellat illum placeat vitae iure?",
        duration: "1h",
        price: "$45",
        icon: <Syringe/>,
        linkText: "Olá, vi no site sobre consulta veterinaria e gostaria de mais informações"
    },
    {
        title: "Uber PET",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat eveniet laborum aliquam blanditiis cum amet recusandae sequi? At, rerum dicta ea nam perferendis molestiae repellat illum placeat vitae iure?",
        duration: "2h",
        price: "$30",
        icon: <CarTaxiFront/>,
        linkText: "Olá, vi no site sobre o uber pet e gostaria de mais informações"
    },
    {
        title: "Hotel Pet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat eveniet laborum aliquam blanditiis cum amet recusandae sequi? At, rerum dicta ea nam perferendis molestiae repellat illum placeat vitae iure?",
        duration: "A combinar",
        price: "$80",
        icon: <Hotel/>,
        linkText: "Olá, vi no site sobre hotel pet e gostaria de mais informações"
    },
]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-widht: 768px)": { slidesToScroll: 3}
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-white py-16">
            
            <div className="container mx-auto px-4">
                    <h2 className="text-4xl text-center font-bold mb-12">Serviços</h2>
            </div>

            <div className="relative">
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                        {services.map((item, index) => (
                            <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>

                                <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                    <div className='flex-1 flex items-start justify-between'>

                                        <div className='flex gap-3'>
                                            <span className='text-3xl'>{item.icon}</span>
                                            <div>
                                                <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                <p className='text-gray-400 text-sm select-none'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <Clock className='w-5 h-5'/>
                                            <span>{item.duration}</span>
                                        </div>

                                        <a href={'#'} className='flex items-center justify-center gap-2'>
                                            <WhatsappLogo className='w-5 h-5'/>
                                            Entrar em Contato
                                        </a>
                                    </div>

                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' 
                onClick={scrollPrev}>
                    <ChevronLeft
                    className='w-6 h-6 text-gray-600' />
                </button>
                <button 
                className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' 
                onClick={scrollNext}>
                    <ChevronRight
                    className='w-6 h-6 text-gray-600' />
                </button>

            </div>
        </section>
    )
}