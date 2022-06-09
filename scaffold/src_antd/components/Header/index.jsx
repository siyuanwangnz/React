import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'

class Header extends Component {
    render() {
        return (
            <div>
                <h2>React router demo</h2>

                <Button icon={<BarChartOutlined />} type="primary" onClick={this.props.history.goBack}>back</Button>
                &nbsp;
                <Button type="primary" onClick={this.props.history.goForward}>forward</Button>
            </div>
        )
    }
}
export default withRouter(Header)
