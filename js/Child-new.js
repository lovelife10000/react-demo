import React, {Component} from 'react'

class Child extends Component {
    constructor(props) {
        console.log('[Child]constructor')
        super(props)
        this.state = {
            c: 2
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        debugger
        return {
            cc: 3
        }

    }

    componentDidMount() {
        console.log('[Child]componentDidMount')

    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Child]shouldComponentUpdate')
        debugger
        return true

    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        debugger
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Child]componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('[Child]componentWillUnmount')
    }

    componentDidCatch() {
        console.log('[Child]componentDidCatch')
    }

    render() {
        console.log('[Child]render')
        console.log(this.state)
        return (
            <div>child</div>
        )
    }
}

export default Child