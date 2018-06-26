import React, {Component} from 'react'

class Child extends Component {
    constructor(props) {
        console.log('[Child]constructor')
        super(props)
        this.state={
            c:2
        }
    }

    componentWillMount() {
        console.log('[Child]componentWillMount')
    }

    UNSAFE_componentWillMount() {
        console.log('[Child]UNSAFE_componentWillMount')
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps')
    //
    // }

    componentDidMount() {
        console.log('[Child]componentDidMount')

    }

    componentWillReceiveProps(nextProps,b) {
        console.log('[Child]componentWillReceiveProps')
        console.log(this.props.y)
        debugger
    }

    UNSAFE_componentWillReceiveProps(nextProps,b) {
        console.log('[Child]UNSAFE_componentWillReceiveProps')
        debugger
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Child]shouldComponentUpdate')
        debugger
        return true

    }


    componentWillUpdate() {
        console.log('[Child]componentWillUpdate')
    }

    UNSAVE_componentWillUpdate() {
        console.log('[Child]UNSAVE_componentWillUpdate')
    }





    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBeforeUpdate')
    // }

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
        return (
            <div>child</div>
        )
    }
}

export default Child