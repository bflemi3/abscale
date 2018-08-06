import * as React from 'react';
import './App.css';
import steps from './components/steps'
import Wizard from './components/Wizard'

// import logo from './logo.svg';

interface IAppState {
    result: string
}

class App extends React.Component<any, IAppState> {
    public state: IAppState = {
        result: ''
    }

    constructor(props) {
        super(props);

        this.onFinish = this.onFinish.bind(this);
    }

    public onFinish(result) {
        this.setState({ result });
    }

    public render() {
        const { result } = this.state;
        const isFinished = result.length;
        return (
            <div className="app container-fluid">
                <header className="jumbotron">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1>Where do you fall on the AB Scale?</h1>
                </header>

                {isFinished 
                    ? <div className="result">{result}</div>
                    : <Wizard steps={steps} onFinish={this.onFinish} />
                }
            </div>
        );
    }
}

export default App;
