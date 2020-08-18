import React, { Component } from 'react'

export default class chest extends Component {
    render() {
        return (
            <div>
            <div>
            {this.props.chestDumbbells.map((chestDumbbells, index) => {
                return <div key={index}>
                <h1 class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-0 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Chest Workouts</h1>
                    {chestDumbbells.chestWorkout.map((chestWorkout, subindex) => {
                        return  <div className='max-w-l rounded overflow-hidden shadow-lg' key={subindex}>
                                <h2 className="font-bold text-xl mb-2">{chestWorkout.workout}</h2>
                                <h5 className="text-gray-700 text-base">{chestWorkout.discription}</h5>
                                <img src={chestWorkout.picture}></img>
                                </div>
                        })}
                    </div>
                })}
        </div>
        </div>
        )
    }
}
