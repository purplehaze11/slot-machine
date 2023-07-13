import strawberry from './assets/1.svg'
import orange from './assets/2.svg'
import grape from './assets/3.svg'

function Slots() {
    const slot1 = Math.floor((Math.random() * 3) + 1);
    const slot2 = Math.floor((Math.random() * 3) + 1);
    const slot3 = Math.floor((Math.random() * 3) + 1)
    return (
        <>
            <div id='slot-section' className='flex w-3/6 my-10'>
                <div className="card border-2 border-black mx-2 bg-white rounded">
                    {slot1 === 1 ? <img src={strawberry} /> : slot1 === 2 ? <img src={orange} /> : <img src={grape} />}
                </div>
                <div className="card border-2 border-black mx-2 bg-white rounded">
                    {slot2 === 1 ? <img src={strawberry} /> : slot2 === 2 ? <img src={orange} /> : <img src={grape} />}
                </div>
                <div className="card border-2 border-black mx-2 bg-white rounded">
                    {slot3 === 1 ? <img src={strawberry} /> : slot3 === 2 ? <img src={orange} /> : <img src={grape} />}
                </div>
            </div>
            <div id='result-section' className='block text-3xl'>
                {slot1 === slot2 && slot2 === slot3 ? <h2 className='text-green-400'>You Win!</h2> : <h2 className='text-red-400'>You Lose!</h2>}
            </div>
            <button>Play</button>
        </>
    )
}

export default Slots