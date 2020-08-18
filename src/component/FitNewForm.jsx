import React, { Component } from 'react'

let baseURL = 'http://localhost:8000/fits/'

export default class FitNewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fits: [],
            name: '',
            steps: '',
            description: ''
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    } 
    
        findFits = () => {
            fetch(baseURL).then(res => {
                return res.json();
            }).then(data => {
                console.log(data)
                this.setState({
                    fits: data.data
                })
            })
        }
    
        addFit = (event) =>  {
            event.preventDefault();
            fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    steps: this.state.steps ,
                    description:  this.state.description
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                }).then( (res => {
                return res.json();
                })).then(response => {
                    console.log(response.data)
                    const newFit = response.data
                    const copyFits = [...this.state.fits];
                    copyFits.push(newFit);
                    this.setState({
                        fits: copyFits,
                        name:'',
                        steps:'',
                        description:''
                    })
            });
            this.findFits()
        }
    
    
        deleteFit = (id) => {
            fetch(baseURL + id ,{
                method: 'DELETE' , 
                headers: {
                'Content-Type': 'application/json',
                },
            }).then(res => {
                return res.json();
            }).then( response => {
                console.log(response)
                if(response.status.code == 200){
                    const removeFit= response.data
                    const copyFits = [...this.state.fits];
                    copyFits.splice(removeFit.id , 1);
                    this.setState({
                        fits: copyFits,
                        name:'',
                        steps:'',
                        description:''
                    })
                } 
            })
        }
    
    componentDidMount() {
        this.findFits()
    }
    


    render() {
        return (
            <div>
                <form className="w-full max-w-" onSubmit={ (event) => this.addFit(event)}>
                    <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" id="name" placeholder="Workout" value={this.name} onChange={this.handleChange}></input>
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" id="steps" placeholder="Set" value={this.steps} onChange={this.handleChange}></input>
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" id="description" placeholder="Note" value={this.description} onChange={this.handleChange}></input>
                    <input className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit" value="submit"></input>
                    </div>
                </form>
                <div>
                {this.state.fits.map(fit => {
                    return(
                        <div className="px-2" key={fit.id}>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-20 flex flex-col justify-between leading-normal ">
                            <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Workout: {fit.name}</div>
                            <div className="text-gray-700 text-base">Steps: {fit.steps}</div>
                            <div className="text-gray-700 text-base">Note: {fit.description}</div>
                            <div className="flex items-center">
                            <div className="text-sm">
                            <div className="text-gray-600">{fit.created_at}</div>
                            </div>
                            </div>
                            </div><button className="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>this.deleteFit(fit.id)}>delete</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
