import React, { Component } from 'react'

export default class Arm extends Component {
    render() {
        return (
                <div>
                {this.props.armDumbbells.map((armDumbbells, index) => {
                    return <div key={index}>
                        <h1 class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-0 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Arm Workouts</h1>
                        {armDumbbells.armWorkout.map((armWorkout, subindex) => {
                            return  <div className='max-w-l rounded overflow-hidden shadow-lg' key={subindex}>
                                    <h2 className="font-bold text-xl mb-2">{armWorkout.workout}</h2>
                                    <h5 className="text-gray-700 text-base">{armWorkout.discription}</h5>
                                    <img src={armWorkout.picture}></img>
                                    </div>
                            })}
                        </div>
                    })}
            </div>
        )
    }
}
