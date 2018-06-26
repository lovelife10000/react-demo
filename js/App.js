import React, {Component} from 'react'
import Child from './Child'

class App extends Component {
    constructor(props) {
        console.log('[App]constructor')
        super(props)
        this.state = {
            abc:1
        }
    }

    componentWillMount() {
        console.log('[App]componentWillMount')
    }

    UNSAFE_componentWillMount() {
        console.log('[App]UNSAFE_componentWillMount')
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps')
    //
    // }

    componentDidMount() {
        console.log('[App]componentDidMount')

    }

    componentWillReceiveProps(nextProps,b) {
        console.log('[App]componentWillReceiveProps')
        debugger
    }

    UNSAFE_componentWillReceiveProps(nextProps,b) {
        console.log('[App]UNSAFE_componentWillReceiveProps')
        debugger
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App]shouldComponentUpdate')
        return true

    }


    componentWillUpdate() {
        console.log('[App]componentWillUpdate')
    }

    UNSAVE_componentWillUpdate() {
        console.log('[App]UNSAVE_componentWillUpdate')
    }


    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate')
    // }

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
                <Child y={this.state.abc}/>
                App{this.state.abc}</div>
        )
    }
}

export default App