import React, { Component } from 'react'

export default class Shoulder extends Component {
    render() {
        return (
            <div>
                <div>
                {this.props.shoulderDumbbells.map((shoulderDumbbells, index) => {
                    return <div key={index}>
                        <h1 class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-0 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Shoulder Workouts</h1>
                        {shoulderDumbbells.shoulderWorkout.map((shoulderWorkout, subindex) => {
                            return  <div className='max-w-l rounded overflow-hidden shadow-lg' key={subindex}>
                                    <h2 className="font-bold text-xl mb-2">{shoulderWorkout.workout}</h2>
                                    <h5 className="text-gray-700 text-base">{shoulderWorkout.discription}</h5>
                                    <img src={shoulderWorkout.picture}></img>
                                    </div>
                            })}
                        </div>
                    })}
            </div>
            </div>
        )
    }
}
