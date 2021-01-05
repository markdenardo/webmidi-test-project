import react from 'react'
import WebMidi from 'webmidi'

//WebMidiComponent
const WebMidiComponent = () => {
    
return(
    <>
    <div>something</div>
    </>
)
}

export default WebMidiComponent

//WebMidi function

WebMidi.enable(function (err) {

        if (err) {
            console.log("WebMidi could not be enabled.", err)
        } else {
            var output = WebMidi.getOutputByName('Elektron Digitakt')

            console.log("WebMidi enabled!")
            console.log(WebMidi.inputs)
            console.log(WebMidi.outputs)

            for (let i = 0; i < 10; i++){
                //plays note on Digitakt
                output.playNote("C3")
                console.log(i,'time')
            }
            

            //

            
        }

    })