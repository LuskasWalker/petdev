import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primer from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Royal Canin", logo: royal},
    { name: "Golden", logo: golden},
    { name: "Primer", logo: primer},
    { name: "Formula Natural", logo: natural},
    { name: "Whiskas", logo: whiskas},
    { name: "Golden", logo: golden},
]

export function Footer() {
    return(
        <section className='bg-[#e84c3d] py-16 text-white'>
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8' data-aos="fade-up">
                    <h1 className='text-3xl font-semibold mb-8 text-center'>Marcas Parceiras</h1>
                    
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                src={item.logo}
                                alt={item.name}
                                width={100}
                                height={50}
                                style={{
                                    width: 'auto',
                                    height: 'auto'
                                }}
                                className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                

                </div>
                
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>PET SHOP DEV</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e carrinho que ele mereçe</p>
                        <a 
                        href={'#'}
                        className='bg-green-500 px-4 py-2 rounded-md'
                        >
                            Contato via whatsapp
                        </a>
                    </div>
                        
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Rua dos Pets 123</p>
                        <p>Cidade, Estado - CEP: 12345-678</p>
                        <p>Email: teste@gmail.com</p>
                        <p>Telefone: (XX) 4002-8922</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="#" >
                                 <YoutubeLogo className='w-8 h-8 rounded-full'/>
                            </a>
                            <a href="#" >
                                 <FacebookLogo className='w-8 h-8 rounded-full'/>
                            </a>
                            <a href="#">
                                 <InstagramLogo className='w-8 h-8 rounded-full'/>
                            </a>
                        </div>
                            
                    </div>

                </footer>

            </div>
        </section>
    )
}