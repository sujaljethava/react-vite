import React from 'react'
import Card from '../Componets/Card'
import '../Componets/card.css'

const Cardparent = () => {
    return (
        <>
            <div className="card-parent">
                <Card name="Sujal Jethava" age={21} />
                <Card name="Harshi Gohil" age={22} />
                <Card name="Tina kava" age={22} />
                <Card name="Divyesh Jadav" age={21} />
                <Card name="Tulsi Rathod" age={22} />
                <Card name="Vivek Jadav" age={20} />
                <Card name="Vidhi Parmar" age={20} />
            </div>
        </>
    )
}

export default Cardparent
