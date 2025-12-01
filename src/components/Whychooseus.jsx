import React from 'react'
import { Highlighter } from './highlighter'
import { FeaturesSectionWithHoverEffects } from './FeaturesSectionWithHoverEffects'
const Whychooseus = () => {
return (
    <>
        <h1
            style={{
                textAlign: 'center',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                margin: '2rem'
            }}
        >
            <Highlighter action="underline" color="#FF9800">Why choose us!</Highlighter>
        </h1>
        <FeaturesSectionWithHoverEffects />
    </>
)
}

export default Whychooseus