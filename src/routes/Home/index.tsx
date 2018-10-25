import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { addCount, subtractCount, addCountAsync } from '../../reducers/count/action'
import { Dispatch } from 'redux'

const mapState = state => ({
    count: state.count
})

const mapDispatch = (dispatch: Dispatch) => ({
    addCount: n => dispatch(addCount(n)),
    subtractCount: n => dispatch(subtractCount(n)),
    addCountAsync: n => dispatch(addCountAsync(n))
})
interface Props extends Partial<ReturnType<typeof mapState>>, Partial<ReturnType<typeof mapDispatch>> {}

class Home extends React.Component<Props> {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        const { addCount, subtractCount, addCountAsync, count } = this.props
        return (
            <div>
                <Button onClick={() => addCount(10)}>+</Button>
                <Button onClick={() => subtractCount(10)}>-</Button>
                <Button onClick={() => addCountAsync(10)}>异步+</Button>
                <span>{count}</span>
            </div>
        )
    }
}

export default connect(
    mapState,
    mapDispatch
)(Home)
