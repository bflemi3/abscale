import * as React from 'react'

interface IProgressBarProps {
    completed: number
}

export default class ProgressBar extends React.Component<IProgressBarProps, any> {

    public render() {
        const style = { width: `${this.props.completed * 100}%` };
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={style}/>
            </div>
        )
    }
}