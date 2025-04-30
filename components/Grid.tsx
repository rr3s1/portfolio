import React from 'react'
import { MdDescription } from 'react-icons/md'
import { BentoGrid } from './ui/BentoGrid'
import { gridItems } from '@/data'
import {BentoGridItem} from '@/components/ui/BentoGrid'
import { GlowingEffect } from './ui/glowing-effect'

 
const Grid = () => {
  return (
    <section id="about">
        
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName,
              spareImg}) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    >
                        <div className="absolute inset-0">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                        </div>
                    </BentoGridItem>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid