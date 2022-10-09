import React from 'react'
import { Featureitem } from './Featureitem'
import { StartHereButton } from './StartHereButton'

export const Features = () => {

    const features= [
        {
            icon:"",
            feat: "",
            description: "",

        },{
            icon:"",
            feat: "",
            description: "",
        },{
            icon:"",
            feat: "",
            description: "",
        },{
            icon:"",
            feat: "",
            description: "",
        }
    ]
  return (
    <div>
        <div>

        </div>
        <section>
            <p>

            </p>
        </section>
        <div>
            {
                features.map( ({feat, icon, description})=> (
                    <Featureitem feat={feat} icon={icon} description={description } />
                ))
            }
        </div>
        <section>
            <StartHereButton />
        </section>

    </div>
  )
}
