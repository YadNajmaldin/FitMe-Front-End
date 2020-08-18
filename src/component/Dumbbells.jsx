import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Dumbbells extends Component {
    render() {
        return (
            <div id="dumbbells" className="grid grid-cols-3 gap-10 ">
                <div className='max-w-l rounded overflow-hidden shadow-lg'>
                    <img src='https://lh3.googleusercontent.com/i5LISwJTE5Q3lhHXQ6n0YyvgdoGnqeTy3OnZcGzB_yF-vzrJ0-Cybg_Rfr6Gj91WZr0'></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                            <Link to='/dumbbells/abs'>Abs</Link>
                            </div>
                        </div>
                </div>
                <div className='max-w-l rounded overflow-hidden shadow-lg'>
                    
                    <img src='https://i0.wp.com/ascentchiropractic.com/wp-content/uploads/2018/04/shutterstock_162592241.jpg?fit=1000%2C662&ssl=1'></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                            <Link to='/dumbbells/arm'>Arm</Link>
                            </div>
                        </div>
                </div>
                <div className='max-w-l rounded overflow-hidden shadow-lg'>
                    
                    <img src='https://www.musclemonsters.com/wp-content/uploads/2016/08/hypertrophy.jpg'></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                            <Link to='/dumbbells/chest'>Chest</Link>
                            </div>
                        </div>
                </div>
                <div className='max-w-l rounded overflow-hidden shadow-lg'>
                    
                    <img src='https://media.istockphoto.com/photos/bodybuilder-showing-muscles-back-and-arms-picture-id486761679?k=6&m=486761679&s=170667a&w=0&h=ipmR2jzmV7pLfNuLgXy0hQ9Gp2xrrgsHeL4qAWsy8Vw='></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                            <Link to='/dumbbells/back'>Back</Link>
                            </div>
                        </div>
                </div>
                <div className='max-w-l rounded overflow-hidden shadow-lg'>
                    
                    <img src='https://healthclubfinder.org/wp-content/uploads/2018/12/5-Days-Push-Pull-Legs-Workout-Plan-For-Weight-Loss-As-Well-As-For-Building-Up-Muscles.jpg'></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                            <Link to='/dumbbells/leg'>Leg</Link>
                            </div>
                        </div>
                </div>
                <div className='max-w-l rounded overflow-hidden shadow-lg'>
                    
                    <img src='https://upl.stack.com/wp-content/uploads/2013/11/ChestStrong.jpg'></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                            <Link to='/dumbbells/shoulder'>Shoulder</Link>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
