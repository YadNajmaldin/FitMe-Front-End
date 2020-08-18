import React, { Component } from 'react'

export default class Abs extends Component {
    render() {
        return (
            <div>
                {this.props.absDumbbells.map((absDumbbells, index) => {
                    return <div key={index}>
                    <h1 class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-0 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Abs Workouts</h1>
                        {absDumbbells.absWorkouts.map((absWorkouts, subindex) => {
                            return  <div lassName='max-w-l rounded overflow-hidden shadow-lg' key={subindex}>
                                    <h2 className="font-bold text-xl mb-2">{absWorkouts.workout}</h2>
                                    <h2 className="text-gray-700 text-base">{absWorkouts.discription}</h2>
                                    <img src={absWorkouts.picture}></img>
                                    </div>
                            })}
                        </div>
                    })}
            </div>
        )
    }
}
