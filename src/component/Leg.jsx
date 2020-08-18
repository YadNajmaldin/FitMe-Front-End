import React, { Component } from 'react'

export default class leg extends Component {
    render() {
        return (
            <div>
            <div>
            {this.props.legDumbbells.map((legDumbbells, index) => {
                return <div key={index}>
                    <h1 class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-0 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Leg Workouts</h1>
                    {legDumbbells.legWorkout.map((legWorkout, subindex) => {
                        return  <div className='max-w-l rounded overflow-hidden shadow-lg' key={subindex}>
                                <div className="font-bold text-xl mb-2">{legWorkout.workout}</div>
                                <h5 className="text-gray-700 text-base">{legWorkout.discription}</h5>
                                <img src={legWorkout.picture}></img>
                                </div>
                        })}
                    </div>
                })}
        </div>
        </div>
        )
    }
}
