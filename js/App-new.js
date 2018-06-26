import React, {Component} from 'react'
import Child from './Child-new'

class App extends Component {
    constructor(props) {
        console.log('[App]constructor')

        super(props)
        this.state = {
            abc:1,
            ref1:'',
            ref2:''
        }
    }



    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')

        debugger
        return{

        }
    }

    componentDidMount() {
        console.log('[App]componentDidMount')
        console.log(this.props.children)
        debugger


    }



    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App]shouldComponentUpdate')
        debugger
        return true

    }




    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        debugger
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App]componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('[App]componentWillUnmount')
    }

    componentDidCatch() {
        console.log('[App]componentDidCatch')
    }

    changeAbc(){
        this.setState({
            abc:2
        })
    }

    render() {
        console.log('[App]render')
        return (
            <div onClick={this.changeAbc.bind(this)}>
                <Child y={this.state.abc} ref={(dom)=>this.state.ref1=dom}/>
           <span  ref={(dom)=>this.state.ref2=dom}>666</span>
                App{this.state.abc}</div>
        )
    }
}

export default App