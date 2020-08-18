import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div >
                <div id='card' className="grid grid-cols-2 gap-10 max-w-l rounded overflow-hidden shadow-lg">
                <img className="w-full" src='https://www.planetfitness.com/sites/default/files/feature-image/xbreak-workout_602724.jpg.pagespeed.ic.mQ6q_WDrRM.webp'></img>
                <div className="px-6 py-4">
                    <div  className="font-bold text-xl mb-2">
                    <Link to='/dumbbells'>Dumbbell exercises</Link>
                    </div>
                        <p className="text-gray-700 text-base">Dumbbells are the most accessible free weights so they’re the first most people tend to try, either in the gym or as part of a home workout. They’re also among the most versatile weights you can use, and even if you usually gravitate towards the barbell to tackle big lifts like the back squat, deadlift and bench press, there are plenty of reasons to make sure you also find time for dumbbell exercises.</p>
                    </div>
                    <img className="w-full" src='https://plunkettfitness.com/wp-content/uploads/2018/11/cardio-1024x683.jpg'></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                    <Link to='/dumbbells'>Cardio exercises</Link>
                    </div>
                        <p className="text-gray-700 text-base">Cardio exercise is any exercise that raises your heart rate. Face it our bodies were made to move. And we all know that to keep our muscles in shape we need move them. This movement makes them stronger and stronger muscles make for a more efficient and healthy body. Your heart is a muscle. Therefore working it makes it stronger. A stronger cardio-vascular system means more capillaries delivering more oxygen to cells in your muscles. This enables your cells to burn more fat during both exercise and inactivity</p>
                    </div>
            </div>
            </div>
            
        )
    }
}

