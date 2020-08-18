import React, { Component } from 'react'

export default class Back extends Component {
    render() {
        return (
            <div>
            <div>
            {this.props.backDumbbells.map((backDumbbells, index) => {
                return <div key={index}>
                    <h1 class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Back Workouts</h1>
                    {backDumbbells.backWorkout.map((backWorkout, subindex) => {
                        return  <div className='max-w-l rounded overflow-hidden shadow-lg' key={subindex}>
                                <h2 className="font-bold text-xl mb-2">{backWorkout.workout}</h2>
                                <h5 className="text-gray-700 text-base">{backWorkout.discription}</h5>
                                <img src={backWorkout.picture}></img>
                                </div>
                        })}
                    </div>
                })}
        </div>
        </div>
        )
    }
}
