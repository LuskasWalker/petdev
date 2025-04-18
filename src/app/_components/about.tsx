import Image from 'next/image';

import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';



export function About() {
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className='grid grid-cols-1-1 lg:grid-cols-2 gap-12 items-center'>

                    <div className='relative' >
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden' data-aos="fade-up" data-aos-delay="300">
                            <Image
                            src={about1Img}
                            alt='Foto do Cachoro'
                            fill
                            quality={100}
                            className='object-cover hover:scale-110 duration-300'
                            priority
                            />
                        </div>

                        <div className='absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white' data-aos="fade-right" data-aos-delay="500">
                            <Image
                            src={about2Img}
                            alt='Foto do gatinho'
                            fill
                            quality={100}
                            priority
                            />
                        </div>
                    </div>

                    <div className='space-y-6 mt-10' data-aos="fade-up-right" data-aos-delay="300">
                        <h2 className='text-4xl font-bold'>SOBRE</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae vitae soluta, reprehenderit minus repudiandae dolorem eligendi ea dolores maiores totam officia possimus temporibus animi. Nulla assumenda ipsa suscipit hic.
                        </p>

                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500'/>
                                Aberto desde 2016.
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500'/>
                                Equipe com mais de 10 Funcionarios.
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500'/>
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                    <div className='flex gap-2'>
                            <a 
                                target='_blank'
                                href={'https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações'}
                                className='bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
                            >
                                <WhatsappLogo className='w-5 h-5 text-white'/>
                                Contato via Whatsapp
                            </a>

                            <a 
                                href="#"
                                className='text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
                            >
                                <MapPin className='w-5 h-5 text-black'/>
                                Endereço da Loja
                            </a>
                    </div>

                    </div>
                </div>

            </div>
        </section>
    )
}